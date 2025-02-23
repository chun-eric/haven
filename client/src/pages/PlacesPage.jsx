import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdOutlineSoupKitchen } from 'react-icons/md'
import { FaCar } from 'react-icons/fa6'
import { IoMdTv } from 'react-icons/io'
import { TbAirConditioning } from 'react-icons/tb'
import { FaSwimmingPool } from 'react-icons/fa'
import { LiaHotTubSolid } from 'react-icons/lia'
import { LuWashingMachine } from 'react-icons/lu'
import { BsPersonWorkspace } from 'react-icons/bs'
import { MdPets } from 'react-icons/md'
import { CgGym } from 'react-icons/cg'
import { MdOutlineOutdoorGrill } from 'react-icons/md'
import { MdOutlineDeck } from 'react-icons/md'
import { GiCctvCamera } from 'react-icons/gi'
import { MdOutlineCleaningServices } from 'react-icons/md'

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
            <div className='mb-4'>
              <h2 className='pl-3 mt-2 text-xl font-semibold '>Title</h2>
              <p className='pl-3 mt-1 text-sm text-gray-500'>
                The title should be short and catchy.
              </p>
              <input
                className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-full outline-none'
                type='text'
                placeholder='title, e.g: Cozy Cabin in the Woods'
              />
            </div>
            <div className='mb-4'>
              <h2 className='pl-3 mt-2 text-xl font-semibold '>Address</h2>
              <p className='pl-3 mt-1 text-sm text-gray-500'>
                The exact address to this place.
              </p>
              <input
                className='w-full px-4 py-2 mb-4 border border-gray-300 outline-none rounded-xl'
                type='text'
                placeholder='address, e.g: 3 Smith Street Vermont'
              />
            </div>
            <div className='mb-2'>
              <h2 className='pl-3 mt-2 text-xl font-semibold '>Photos</h2>
              <p className='pl-3 mt-1 mb-1 text-sm text-gray-500'>
                Show your amazing place. The more the better.
              </p>
            </div>
            <div className='flex gap-2 mb-2'>
              <input
                type='text'
                className='text-sm outline-none'
                placeholder='Upload via a url link...'
              />
              <button className='px-4 text-sm bg-gray-200 rounded-3xl'>
                Add&nbsp;photo
              </button>
            </div>
            <div className='grid grid-cols-3 mb-4 md:grid-cols-4 lg:grid-cols-6'>
              <button className='flex flex-col items-center gap-2 px-8 py-6 mt-2 ml-1 text-sm text-gray-600 bg-transparent border-2 border-gray-300 border-dotted black rounded-xl hover:bg-gray-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 text-gray-600'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z'
                  />
                </svg>
                Upload
              </button>
            </div>
            <div className='mb-4'>
              <h2 className='pl-3 mt-2 text-xl font-semibold '>Description</h2>
              <p className='pl-3 mt-1 mb-1 text-sm text-gray-500'>
                Describe your place to make it easy for guests to understand.
              </p>
              <textarea className='outline-none ' />
            </div>
            <div className='mb-4'>
              <h2 className='pl-3 mt-2 text-xl font-semibold '>Perks</h2>
              <p className='pl-3 mt-1 mb-1 text-sm text-gray-500'>
                Select all the perks of your place.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {/* 1st column */}
                <div className='flex flex-col gap-2 p-3'>
                  <label
                    htmlFor=''
                    className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'
                  >
                    <input type='checkbox' />
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z'
                      />
                    </svg>

                    <span>Wifi</span>
                  </label>
                  <label
                    htmlFor=''
                    className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'
                  >
                    <input type='checkbox' />
                    <FaCar />
                    <span>Free Parking</span>
                  </label>
                  <label
                    htmlFor=''
                    className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'
                  >
                    <input type='checkbox' />
                    <IoMdTv />
                    <span>TV/Netflix</span>
                  </label>
                  <label
                    htmlFor=''
                    className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'
                  >
                    <input type='checkbox' />
                    <MdOutlineSoupKitchen />
                    <span>Kitchen</span>
                  </label>
                  <label
                    htmlFor=''
                    className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'
                  >
                    <input type='checkbox' />
                    <TbAirConditioning />
                    <span>Air conditioning</span>
                  </label>
                </div>

                {/* 2nd column */}
                <div className='flex flex-col gap-2 p-3'>
                  <label
                    htmlFor=''
                    className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'
                  >
                    <input type='checkbox' />
                    <FaSwimmingPool />
                    <span>Pool</span>
                  </label>
                  <label
                    htmlFor=''
                    className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'
                  >
                    <input type='checkbox' />
                    <LiaHotTubSolid />
                    <span>Hot Tub</span>
                  </label>
                  <label
                    htmlFor=''
                    className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'
                  >
                    <input type='checkbox' />
                    <LuWashingMachine />
                    <span>Washer and Dryer</span>
                  </label>
                  <label
                    htmlFor=''
                    className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'
                  >
                    <input type='checkbox' />
                    <BsPersonWorkspace />
                    <span>Workspace</span>
                  </label>
                  <label
                    htmlFor=''
                    className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'
                  >
                    <input type='checkbox' />
                    <MdPets />
                    <span>Pet Friendly</span>
                  </label>
                </div>

                {/* 3rd column */}
                <div className='flex flex-col gap-2 p-3'>
                  <label
                    htmlFor=''
                    className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'
                  >
                    <input type='checkbox' />
                    <MdOutlineCleaningServices />
                    <span>Cleaning</span>
                  </label>
                  <label
                    htmlFor=''
                    className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'
                  >
                    <input type='checkbox' />
                    <MdOutlineOutdoorGrill />
                    <span>BBQ grill</span>
                  </label>
                  <label
                    htmlFor=''
                    className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'
                  >
                    <input type='checkbox' />
                    <CgGym />
                    <span>Gym Access</span>
                  </label>
                  <label
                    htmlFor=''
                    className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'
                  >
                    <input type='checkbox' />
                    <MdOutlineDeck />
                    <span>Outdoor deck</span>
                  </label>
                  <label
                    htmlFor=''
                    className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'
                  >
                    <input type='checkbox' />
                    <GiCctvCamera />
                    <span>Security Cameras</span>
                  </label>
                </div>
              </div>
              <div className='flex justify-center px-3 mx-auto mt-3 text-center'>
                <button className=' lg:w-[40%] sm:w-[60%] py-2 text-lg text-white rounded-full bg-primary font-semibold w-full hover:bg-gray-200 transition-all duration-100 ease-in hover:text-black'>
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default PlacesPage
