import AccountNav from '../components/AccountNav'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AddressLink from '../components/AddressLink'
import PlaceGallery from '../components/PlaceGallery'
import BookingWidget from '../components/BookingWidget'

export default function PlacePage () {
  const { id } = useParams()
  const [place, setPlace] = useState(null)
  const [showExtraInfo, setShowExtraInfo] = useState(false)

  // useEffect to grab the place by id
  useEffect(() => {
    if (!id) {
      return
    }
    axios.get(`/places/${id}`).then(response => {
      setPlace(response.data)
    })
  }, [id])

  // if there is no place, return null
  if (!place) return ''

  return (
    <>
      <div className='w-full px-4 sm:px-8 mt-4 bg-[#ffffff] max-w-7xl mx-auto relative'>
        <div className='px-8 pt-8 mt-4 -mx-8 bg-white-100 '>
          <h1 className='mb-2 text-3xl'>{place.title}</h1>
          <AddressLink>{place.address}</AddressLink>
          <PlaceGallery place={place} />
          <div className=''>
            <div className='my-6'>
              <h2 className='text-gray-800 text-md leading'>
                {place.description}
              </h2>
            </div>
            <div className=''>
              <h3 className='pt-4 mb-4 font-bold leading-5 text-gray-700 text-md '>
                House Rules
              </h3>
              Check in: <span className='font-semibold'> {place.checkIn} </span>
              <br />
              Check out:{' '}
              <span className='font-semibold'>{place.checkOut} </span>
              <br /> Max number of guests:{' '}
              <span className='font-semibold'>{place.maxGuests}</span>
            </div>
            <div className='my-4 mb-4 text-gray-700 leadind-5 text-md'>
              <div className='pt-4 mb-4 font-bold leading-5 text-gray-700 text-md'>
                Extra Info
              </div>
              <div className='flex flex-col'>
                <span className='truncate text-ellipsis'>
                  {place.extraInfo}
                </span>
                <button
                  className='flex items-center gap-2 mt-2 font-semibold text-left underline text-slate-800 '
                  onClick={() => setShowExtraInfo(true)}
                >
                  Show more
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-4 h-4 mt-1 '
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m8.25 4.5 7.5 7.5-7.5 7.5'
                    />
                  </svg>
                </button>
              </div>

              {/* Booking */}
              <BookingWidget place={place} />
            </div>
          </div>
        </div>
      </div>

      {/* Show modal  */}
      {showExtraInfo && (
        <div
          className='fixed inset-0 z-50 flex items-start justify-center bg-black pt-36 bg-opacity-60 sm:pt-36 md:pt-40'
          onClick={() => setShowExtraInfo(false)}
        >
          <div
            className='relative w-full p-10 bg-white max-w-4xl rounded-3xl max-h-[90vh] overflow-y-auto mx-6'
            onClick={e => e.stopPropagation()}
          >
            <button
              className='absolute p-2 text-gray-500 top-4 right-4 hover:text-gray-700'
              onClick={() => setShowExtraInfo(false)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            <div className='my-4'>
              <h1 className='text-2xl font-bold text-[#222222] mb-8'>
                About this space
              </h1>
              <div className='mt-4 text-lg leading-relaxed text-gray-800'>
                {place.extraInfo}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
