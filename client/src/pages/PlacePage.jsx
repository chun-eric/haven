import AccountNav from '../components/AccountNav'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AddressLink from '../components/AddressLink'
import PlaceGallery from '../components/PlaceGallery'

export default function PlacePage () {
  const { id } = useParams()
  const [place, setPlace] = useState(null)

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
      <div className='px-8  mt-4 bg-[#ffffff] max-w-6xl mx-auto'>
        <div className='px-8 pt-8 mt-4 -mx-8 bg-white-100 '>
          <h1 className='text-3xl'>{place.title}</h1>
          <AddressLink>{place.address}</AddressLink>
          <PlaceGallery place={place} />
          <div className=''>
            <div className=''>
              <h2>{place.description}</h2>
            </div>
            <div className=''>
              Check in: {place.checkIn} <br />
              Check out: {place.checkOut}
            </div>
            <div className=''>
              <div className=''>
                <h2 className=''>{place.extraInfo}</h2>
              </div>
              <div className='mt-2 mb-4 text-sm leading-5 text-gray-700'>
                Extra Info
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
