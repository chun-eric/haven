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
      <div className='mx-auto mt-20 text-center max-w-7xl'>
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
        <div className='p-8 max-w-7xl '>
          {places.length > 0 &&
            places.map(place => (
              // Link to /account/places/:id we will use the id in the PlacesFormPage and will get the place by axio get request initillay on mount with useEffect. The url endpoint will be made in index.js /places/:id
              <Link to={`/account/places/${place._id}`} key={place._id}>
                <div className='flex flex-col w-full gap-3 p-8 mt-10 transition-all bg-gray-100 max-w-7xl sm:flex-row rounded-xl hover:bg-gray-200'>
                  <div className='flex w-full h-auto mt-2 overflow-hidden text-left bg-gray-200 rounded-lg aspect-video sm:w-48 sm:h-48 shrink-0'>
                    {place.photos.length > 0 && (
                      <img
                        src={
                          'http://localhost:3000/uploads/' + place.photos?.[0]
                        }
                        alt=''
                        className='object-cover w-full h-full '
                      />
                    )}
                  </div>
                  <div className='flex flex-col gap-3 px-4 text-left grow'>
                    <h2 className='text-2xl font-semibold'>{place.title}</h2>
                    <div className='text-left '>
                      <p className='mt-2 text-sm text-ellipsis line-clamp-2'>
                        {place.description}
                      </p>
                      <div className='flex flex-wrap gap-2 mt-3 text-sm'>
                        {place.perks &&
                          place.perks.map(perk => (
                            <span
                              key={perk}
                              className='px-2 py-1 text-xs bg-white rounded-md'
                            >
                              {perk}
                            </span>
                          ))}
                      </div>
                    </div>
                    <p className='mt-1 text-lg font-semibold'>
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
