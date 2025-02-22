import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PlacesPage = () => {
  const { action } = useParams()
  console.log(action)

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
            <h2 className='pl-3 mt-2 text-xl font-semibold '>Title</h2>
            <p className='pl-3 mt-1 text-sm text-gray-500'>
              The title should be short and catchy.
            </p>
            <input
              className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-full outline-none'
              type='text'
              placeholder='title, e.g: Cozy Cabin in the Woods'
            />
            <h2 className='pl-3 mt-2 text-xl font-semibold '>Address</h2>
            <p className='pl-3 mt-1 text-sm text-gray-500'>
              The exact address to this place.
            </p>
            <input
              className='w-full px-4 py-2 mb-4 border border-gray-300 outline-none rounded-xl'
              type='text'
              placeholder='address, e.g: 3 Smith Street Vermont'
            />
            <h2 className='pl-3 mt-2 text-xl font-semibold '>Photos</h2>
            <p className='pl-3 mt-1 mb-1 text-sm text-gray-500'>
              To show your place. More is better.
            </p>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              <button className='px-8 py-6 mt-2 ml-3 text-xl font-bold text-black bg-transparent border rounded-xl'>
                +
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default PlacesPage
