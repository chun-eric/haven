import { useState } from 'react'
import { differenceInCalendarDays } from 'date-fns'

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

  return (
    <div className='max-w-md p-8 bg-white shadow-lg border-slate-800 rounded-2xl'>
      {/* Price */}
      <div className='mb-4'>
        <div className='flex flex-col text-2xl font-bold text-left text-gray-800'>
          Price: ${place.price * numberOfNights}
        </div>
        <div className='text-sm font-normal'>Total before taxes</div>
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
                className='w-full p-0 text-sm border-none focus:ring-0'
                type='date'
                value={checkIn}
                onChange={e => setCheckIn(e.target.value)}
              />
              {checkIn && (
                <div className='text-sm'>{formatDisplayDate(checkIn)}</div>
              )}
            </div>
            <div className='flex flex-col w-1/2 px-4 py-3 border-b border-gray-600'>
              <label className='mb-1 text-xs font-semibold uppercase'>
                Check-out{' '}
              </label>
              <input
                type='date'
                value={checkOut}
                onChange={e => setCheckOut(e.target.value)}
              />
              {checkOut && (
                <div className='text-sm'>{formatDisplayDate(checkOut)}</div>
              )}
            </div>
          </div>
        </div>

        {/* Guest selector */}
        <div className='relative flex flex-col px-4 py-3'>
          <label className='mb-1 text-xs font-semibold uppercase'>
            Guests{' '}
          </label>
          <select
            name=''
            value={numGuests}
            className='w-full p-0 pr-8 text-sm bg-transparent border-none appearance-none focus:ring-0'
            onChange={e => setNumGuests(e.target.value)}
          >
            {/* creating guest options with an array loop */}
            {[...Array(16)].map((_, i) => (
              <option key={i} value={i + 1} className='py-2 capitalize'>
                {i + 1} {i + 1 === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
          <div className='absolute text-gray-600 transform -translate-y-1/2 pointer-events-none right-3 top-1/2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor '
              className='w-4 h-4 text-gray-500'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </div>
        </div>
      </div>
      <button className='w-full px-4 py-3 mt-3 text-lg font-semibold text-white rounded-full bg-primary'>
        Reserve
      </button>
    </div>
  )
}

export default BookingWidget
