import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Perks from '../components/Perks'
import axios from 'axios'
import PhotosUploader from '../components/PhotosUploader'

const PlacesPage = () => {
  const { action } = useParams()
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [addedPhotos, setAddedPhotos] = useState([])
  const [photosLink, setPhotosLink] = useState([])
  const [description, setDescription] = useState('')
  const [perks, setPerks] = useState([]) // array to store perks
  const [extraInfo, setExtraInfo] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkout, setCheckout] = useState('')
  const [maxGuests, setMaxGuests] = useState(1)
  const [price, setPrice] = useState(100)
  const [redirect, setRedirect] = useState(false)

  function sectionHeader (text) {
    return <h2 className='pl-3 mt-2 text-xl font-semibold '>{text}</h2>
  }

  //
  function sectionDescription (text) {
    return <p className='pl-3 mt-1 text-sm text-gray-500'>{text}</p>
  }

  function sectionLabels (header, description) {
    return (
      <>
        {sectionHeader(header)}
        {sectionDescription(description)}
      </>
    )
  }


  return (
    <div>
      {action !== 'new' && (
        <div className='mt-20 text-center'>
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
      )}

      {action === 'new' && (
        <div className='flex flex-col justify-center w-full mx-auto mt-10 max-w-7xl'>
          <form action='' className='w-full max-w-3xl mx-auto'>
            {/* Title */}
            <div className='mb-4'>
              {sectionLabels('Title', 'The title should be short and catchy.')}
              <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-full outline-none'
                type='text'
                placeholder='title, e.g: Cozy Cabin in the Woods'
              />
            </div>

            {/* Address */}
            <div className='mb-4'>
              {sectionLabels('Address', 'The exact address to this place.')}
              <input
                value={address}
                onChange={e => setAddress(e.target.value)}
                className='w-full px-4 py-2 mb-4 border border-gray-300 outline-none rounded-xl'
                type='text'
                placeholder='address, e.g: 3 Smith Street Vermont'
              />
            </div>

            {/* Photos upload via link */}
            <div className='mb-2'>
              {sectionLabels(
                'Photos',
                'Show your amazing place. More is better.'
              )}
            </div>
            {/* Photos uploader */}
            <PhotosUploader
              addedPhotos={addedPhotos}
              onChange={setAddedPhotos}
            />
            {/* Description */}
            <div className='mb-4'>
              {sectionLabels(
                'Description',
                'Describe your place to make it easy for guests to understand.'
              )}
              <textarea
                className='outline-none '
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            {/* Perks */}
            <div className='mb-4'>
              {sectionLabels('Perks', 'Select all the perks of your place.')}

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <Perks perks={perks} updatePerks={setPerks} />
              </div>
            </div>

            {/* Extra Info */}
            <div className='mb-5'>
              {sectionLabels(' Additional Info', 'House rules, amenities etc')}
              <textarea
                className='outline-none'
                value={extraInfo}
                onChange={e => setExtraInfo(e.target.value)}
              />
            </div>

            {/* 4 input section - Check In Check Out , max guests, price per night */}
            <div className=''>
              {sectionLabels(
                'Check-in Check-out times',
                'Add check in and out times. remember to have some time for cleaning between guests'
              )}
            </div>
            <div className='grid grid-cols-2 gap-2 mt-3 md:grid-cols-4'>
              <div className='mt-2 mb-4'>
                <h3 className='pl-3 mt-2 text-base'>Check-In Time</h3>
                <input
                  type='text'
                  value={checkIn}
                  onChange={e => setCheckIn(e.target.value)}
                  placeholder='14'
                />
              </div>

              <div className='mt-2 mb-4'>
                <h3 className='pl-3 mt-2 text-bas'>Check-Out Time</h3>
                <input
                  type='text'
                  value={checkout}
                  onChange={e => setCheckout(e.target.value)}
                  placeholder='10'
                />
              </div>

              {/* Max Guests */}
              <div className='mt-2 mb-4'>
                <h3 className='pl-3 mt-2 text-bas'>Max number of Guests</h3>
                <input
                  type='number'
                  value={maxGuests}
                  onChange={e => setMaxGuests(e.target.value)}
                  placeholder='8'
                  className=''
                />
              </div>

              {/* Price per night */}
              <div className='mt-2 mb-4'>
                <h3 className='pl-3 mt-2 text-base'>Price per night</h3>
                <input
                  type='number'
                  className=''
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                  placeholder='e.g 159'
                />
              </div>
            </div>

            {/* Save button */}
            <div className='flex justify-center px-3 mx-auto mt-4 text-center'>
              <button className=' lg:w-[40%] sm:w-[60%] py-2 text-lg text-white rounded-full bg-primary font-semibold w-full hover:bg-gray-200 transition-all duration-100 ease-in hover:text-black'>
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default PlacesPage
