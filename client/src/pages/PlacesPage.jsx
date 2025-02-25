import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AccountNav from '../components/AccountNav'
import axios from 'axios'

// this will be on route /account/places
export default function PlacesPage () {
  const { id } = useParams()
  const [places, setPlaces] = useState([]) // to store all places

  useEffect(() => {
    // get place by id. Make sure to add the get endpoint in our index.js
    axios.get('/places').then(({ data }) => {
      setPlaces(data)
    })
  }, [])

  console.log(places)

  return (
    <>
      <AccountNav />
      <div className='mt-20 mx-auto max-w-7xl text-center'>
        <div className=''>
          <Link
            to='/account/places/new'
            className='inline-flex items-center gap-2 px-4 py-2 text-white rounded-full bg-primary'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
            Add new place
          </Link>
        </div>
        {/* List of all places */}
        <div className='max-w-7xl p-8  '>
          {places.length > 0 &&
            places.map(place => (
              <Link to={`/account/places/${place._id}`} key={place._id}>
                <div className='max-w-7xl w-full flex flex-col sm:flex-row gap-3 mt-10 bg-gray-100 rounded-xl p-8 hover:bg-gray-200 transition-all'>
                  <div className='flex w-full h-auto aspect-video sm:w-32 sm:h-32 bg-gray-300 shrink-0 text-left rounded-lg overflow-hidden'>
                    {place.photos.length > 0 && (
                      <img
                        src={place.photos?.[0]}
                        alt=''
                        className='w-full h-full object-cover'
                      />
                    )}
                  </div>
                  <div className='grow text-left px-4 flex flex-col gap-3'>
                    <h2 className='text-2xl font-semibold'>{place.title}</h2>
                    <div className=' text-left'>
                      <p className='text-sm mt-2 text-ellipsis line-clamp-2'>
                        {place.description}
                      </p>
                      <div className='text-sm mt-3 flex flex-wrap gap-2'>
                        {place.perks &&
                          place.perks.map(perk => (
                            <span
                              key={perk}
                              className='bg-white px-2 py-1 rounded-md text-xs'
                            >
                              {perk}
                            </span>
                          ))}
                      </div>
                    </div>
                    <p className='mt-2 text-xl font-semibold'>
                      ${place.price} per night
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  )
}
