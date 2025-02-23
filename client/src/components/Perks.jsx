import React from 'react'
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

const Perks = ({ selected, onChange }) => {
  return (
    <>
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
    </>
  )
}

export default Perks
