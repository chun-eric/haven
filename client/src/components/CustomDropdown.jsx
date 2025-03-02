import { useState, useEffect, useRef } from 'react'

const CustomDropdown = ({
  options,
  value,
  onChange,
  labelSingular,
  labelPlural
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null) // create a ref for the dropdown element

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside (event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    // clean up function
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  // label text based on current value
  const getLabel = value => {
    return `${value} ${value === 1 ? labelSingular : labelPlural}`
  }

  return (
    <div className='relative w-full' ref={dropdownRef}>
      {/* custom select button */}
      <div
        className='flex items-center justify-between w-full cursor-pointer'
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {/* get label text */}
        <div className='px-3 py-1 text-sm'>{getLabel(value)}</div>
        <div className='px-3 text-gray-700 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
            />
          </svg>
        </div>
      </div>

      {/* dropdown options */}
      {isOpen && (
        <div className='absolute left-0 right-0 z-10 mt-2 bg-white border border-gray-400 rounded-lg shadow-lg top-8'>
          <div className='py-1 overflow-y-auto max-h-60'>
            {options.map(option => (
              <div
                className={`px-3 py-3 text-sm cursor-pointer ${
                  value === option ? 'bg-gray-200' : 'hover:bg-gray-300'
                }`}
                key={option}
                onClick={() => {
                  onChange(option)
                  setIsOpen(false)
                }}
              >
                {getLabel(option)}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hidden actual select for form submission if needed */}
      {/* <select
        className='hidden'
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      >
        {options.map(option => (
          <option key={option} value={option}>
            {getLabel(option)}
          </option>
        ))}
      </select> */}
    </div>
  )
}

export default CustomDropdown
