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

const Perks = ({ perks, updatePerks }) => {
  // Function to handle checkbox click
  function handleClick (e) {
    console.log(e.target.name)

    // Get the name of the checkbox that was clicked
    const { checked, name } = e.target

    // If the checkbox is checked, add the name to the selected array
    if (checked) {
      updatePerks([...perks, name]) // updates the perks array in the parent container
    } else {
      // If the checkbox is unchecked, remove the name from the selected array
      updatePerks([...perks.filter(item => item !== name)]) // updates any changes to the perks array living in parent container
    }
  }

  return (
    <>
      {/* 1st column */}
      <div className='flex flex-col gap-2 p-3'>
        <label className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'>
          <input
            type='checkbox'
            name='wifi'
            onChange={handleClick}
            checked={perks.includes('wifi')}
          />
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
        <label className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'>
          <input
            type='checkbox'
            name='parking'
            onChange={handleClick}
            checked={perks.includes('parking')}
          />
          <FaCar />
          <span>Free Parking</span>
        </label>
        <label className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'>
          <input
            type='checkbox'
            name='tv'
            onChange={handleClick}
            checked={perks.includes('tv')}
          />
          <IoMdTv />
          <span>TV/Netflix</span>
        </label>
        <label className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'>
          <input
            type='checkbox'
            name='kitchen'
            onChange={handleClick}
            checked={perks.includes('kitchen')}
          />
          <MdOutlineSoupKitchen />
          <span>Kitchen</span>
        </label>
        <label className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'>
          <input
            type='checkbox'
            name='ac'
            onChange={handleClick}
            checked={perks.includes('ac')}
          />
          <TbAirConditioning />
          <span>Air conditioning</span>
        </label>
      </div>

      {/* 2nd column */}
      <div className='flex flex-col gap-2 p-3'>
        <label className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'>
          <input
            type='checkbox'
            name='pool'
            onChange={handleClick}
            checked={perks.includes('pool')}
          />
          <FaSwimmingPool />
          <span>Pool</span>
        </label>
        <label className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'>
          <input
            type='checkbox'
            name='tub'
            onChange={handleClick}
            checked={perks.includes('tub')}
          />
          <LiaHotTubSolid />
          <span>Hot Tub</span>
        </label>
        <label className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'>
          <input
            type='checkbox'
            name='washer'
            onChange={handleClick}
            checked={perks.includes('washer')}
          />
          <LuWashingMachine />
          <span>Washer and Dryer</span>
        </label>
        <label className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'>
          <input
            type='checkbox'
            name='workspace'
            onChange={handleClick}
            checked={perks.includes('workspace')}
          />
          <BsPersonWorkspace />
          <span>Workspace</span>
        </label>
        <label className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'>
          <input
            type='checkbox'
            name='pet'
            onChange={handleClick}
            checked={perks.includes('pet')}
          />
          <MdPets />
          <span>Pet Friendly</span>
        </label>
      </div>

      {/* 3rd column */}
      <div className='flex flex-col gap-2 p-3'>
        <label className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'>
          <input
            type='checkbox'
            name='cleaning'
            onChange={handleClick}
            checked={perks.includes('cleaning')}
          />
          <MdOutlineCleaningServices />
          <span>Cleaning</span>
        </label>
        <label className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'>
          <input
            type='checkbox'
            name='bbq'
            checked={perks.includes('bbq')}
            onChange={handleClick}
          />
          <MdOutlineOutdoorGrill />
          <span>BBQ grill</span>
        </label>
        <label className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'>
          <input
            type='checkbox'
            name='gym'
            onChange={handleClick}
            checked={perks.includes('gym')}
          />
          <CgGym />
          <span>Gym Access</span>
        </label>
        <label className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'>
          <input
            type='checkbox'
            name='deck'
            onChange={handleClick}
            checked={perks.includes('deck')}
          />
          <MdOutlineDeck />
          <span>Outdoor deck</span>
        </label>
        <label className='flex items-center gap-3 p-4 border cursor-pointer rounded-xl'>
          <input
            type='checkbox'
            name='security'
            onChange={handleClick}
            checked={perks.includes('security')}
          />
          <GiCctvCamera />
          <span>Security Cameras</span>
        </label>
      </div>
    </>
  )
}

export default Perks
