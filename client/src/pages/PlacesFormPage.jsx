import { useState, useEffect } from 'react'
import { Navigate, Link, useParams } from 'react-router-dom'
import Perks from '../components/Perks'
import PhotosUploader from '../components/PhotosUploader'
import axios from 'axios'
import AccountNav from '../components/AccountNav'

// routes for /account/places/new or /account/places/:id
const PlacesFormPage = () => {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [addedPhotos, setAddedPhotos] = useState([])
  const [photosLink, setPhotosLink] = useState([])
  const [description, setDescription] = useState('')
  const [perks, setPerks] = useState([]) // array to store perks
  const [extraInfo, setExtraInfo] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [maxGuests, setMaxGuests] = useState(1)
  const [price, setPrice] = useState(100)
  const [redirect, setRedirect] = useState(false)

  // on initial mount will check if there is an id on the url if so it will send an get request then download the data and update all state values. If no id it will return.
  useEffect(() => {
    if (!id) {
      return
    }
    axios.get('/places/' + id).then(response => {
      const { data } = response
      setTitle(data.title)
      setAddress(data.address)
      setAddedPhotos(data.photos)
      setDescription(data.description)
      setPerks(data.perks)
      setExtraInfo(data.extraInfo)
      setCheckIn(data.checkIn)
      setCheckOut(data.checkOut)
      setMaxGuests(data.maxGuests)
      setPrice(data.price)
    })
  }, [id])

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

  // function to save place, if there is an id it will update the place
  async function savePlace (e) {
    e.preventDefault() // prevent form from submitting
    // object to store place data
    const placeData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price
    }

    // if no id
    if (id) {
      // update place
      // put request to /places. Pass placeData as the data payload
      await axios.put('/places', {
        id,
        ...placeData
      })
      setRedirect(true)
    }
    // save a new place
    else {
      await axios.post('/places', placeData)
      setRedirect(true)
    }
  }

  // redirecting if true
  if (redirect) {
    return <Navigate to={'/account/places'} />
  }

  return (
    <div>
      <AccountNav />
      <div className='flex flex-col justify-center w-full mx-auto mt-10 max-w-7xl'>
        <form onSubmit={savePlace} className='w-full max-w-3xl mx-auto'>
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
          <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
          {/* Description */}
          <div className='mb-4'>
            {sectionLabels(
              'About this place',
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
            {sectionLabels(
              'What this place offers',
              'Select all the perks of your place.'
            )}

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
                value={checkOut}
                onChange={e => setCheckOut(e.target.value)}
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
    </div>
  )
}

export default PlacesFormPage
