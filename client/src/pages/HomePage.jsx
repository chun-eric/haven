import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider'

const HomePage = () => {
  const [places, setPlaces] = useState([]) // stores all places
  console.log(places)

  useEffect(() => {
    axios.get('/places').then(response => {
      setPlaces(response.data)
    })
  }, [])

  return (
    <div className='grid grid-cols-2 gap-6 px-10 mx-auto mt-12 sm:grid-cols-4 md:grid-cols-3 gap-y-6 lg:grid-cols-5 max-w-7xl'>
      {places.length > 0 &&
        places.map(place => (
          <Link
            to={`/places/${place._id}`}
            key={place._id}
            className='mb-8 overflow-hidden transition rounded-2xl'
          >
            <div className=''>
              {place.photos?.[0] && (
                <ImageSlider photos={place.photos} title={place.title} />
              )}
            </div>
            <h2 className='mt-3 font-semibold text-gray-900 truncate text-ellipsis'>
              {place.city}, {place.country}
            </h2>
            <h3 className='mt-1 text-gray-500 truncate '>
              {place.description}
            </h3>
            <div className='mt-1'>
              <span className='font-semibold'>${place.price} per night</span>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default HomePage
