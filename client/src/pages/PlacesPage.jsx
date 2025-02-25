import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AccountNav from '../components/AccountNav'

// this will be on route /account/places
export default function PlacesPage () {
  const { id } = useParams()
  const [places, setPlaces] = useState(null)

  useEffect(() => {
    if (!id) {
      return
    }
    // get place by id
  }, [id])
  return (
    <>
      <AccountNav />
      <div className='mt-20 mx-auto'>
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
    </>
  )
}
