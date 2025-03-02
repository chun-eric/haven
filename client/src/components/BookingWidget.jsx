import { useState } from 'react'
import { differenceInCalendarDays } from 'date-fns'
import CustomDropdown from './CustomDropdown'

const BookingWidget = ({ place }) => {
  // creating state
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [numGuests, setNumGuests] = useState(1)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  // Calculate number of nights when both dates are provided
  let numberOfNights = 0
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    )
  }

  // formate dates for display
  const formatDisplayDate = dateString => {
    if (!dateString) {
      return ''
    }
    const date = new Date(dateString)
    return `${date.getMonth()}/${date.getDate() + 1}/${date.getFullYear()}`
  }

  // Create array of guest options from 1 to 16
  const guestOptions = Array.from({ length: 16 }, (_, i) => i + 1)

  return (
    <div className='max-w-md p-8 bg-white border border-gray-300 shadow-md rounded-2xl'>
      {/* Price */}
      <div className='mb-4'>
        <div className='flex flex-col text-2xl font-bold text-left text-gray-800'>
          Price: ${place.price * numberOfNights}
        </div>
        <div className='mt-1 text-sm font-normal'>Total before taxes</div>
      </div>

      {/* Date and guest selectors */}
      <div className='mt-3 mb-4 border border-gray-600 rounded-2xl'>
        <div className='flex flex-col'>
          <div className='flex'>
            <div className='flex flex-col w-1/2 px-4 py-3 border-b border-r border-gray-600'>
              <label className='mb-1 text-xs font-semibold uppercase'>
                Check-in{' '}
              </label>
              <input
                className='w-full p-0 text-sm border-none appearance-none focus:outline-none [&::-webkit-calendar-picker-indicator]:hidden cursor-pointer'
                type='date'
                value={checkIn}
                onChange={e => setCheckIn(e.target.value)}
              />
              {checkIn && (
                <div className='text-sm'>{formatDisplayDate(checkIn)}</div>
              )}
            </div>
            <div className='flex flex-col w-1/2 px-4 py-3 border-b border-gray-600 '>
              <label className='mb-1 text-xs font-semibold uppercase '>
                Check-out{' '}
              </label>
              <input
                type='date'
                value={checkOut}
                onChange={e => setCheckOut(e.target.value)}
                className='w-full p-0 text-sm border-none appearance-none focus:outline-none [&::-webkit-calendar-picker-indicator]:hidden cursor-pointer'
              />
              {checkOut && (
                <div className='text-sm'>{formatDisplayDate(checkOut)}</div>
              )}
            </div>
          </div>
        </div>

        {/* Guest selector */}
        <div className='relative flex flex-col py-3'>
          <label className='px-3 mb-1 text-xs font-semibold uppercase'>
            Guests{' '}
          </label>
          {/* Custom dropdown */}
          <CustomDropdown
            options={guestOptions}
            value={numGuests}
            onChange={setNumGuests}
            labelSingular='guest'
            labelPlural='guests'
          />
        </div>
      </div>
      <button className='w-full px-4 py-3 mt-3 text-lg font-semibold text-white rounded-full bg-primary'>
        Reserve
      </button>
      <div className='mt-3 text-center text-gray-700 text-md'>
        You won't be charged yet
      </div>
    </div>
  )
}

export default BookingWidget
