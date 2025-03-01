import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Header = () => {
  const { user } = useContext(UserContext)
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)

  return (
    <div className='px-6 border-b'>
      <header className='hidden w-full p-6 px-6 mx-auto mb-3 lg:items-center lg:justify-between max-w-7xl lg:flex'>
        {/* Top row with logo and user menu */}
        <div className='flex items-center justify-between w-full'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-8 h-8 -rotate-90 text-primary'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
              />
            </svg>
            <span className='text-xl font-bold '>Haven</span>
          </Link>

          {/* Search widget */}
          <div className='flex items-center gap-5 px-4 py-2 border border-gray-300 rounded-full shadow-md shadow-gray-300 '>
            <button className='px-4 py-2 pl-3 text-base font-bold'>
              Anywhere
            </button>
            <div className='h-6 border-l border-gray-300'></div>
            <div className='text-base font-bold'>Anyweek</div>
            <div className='h-6 border-l border-gray-300'></div>
            <div className='text-base '>Add guests</div>
            <button className='p-2 text-white rounded-full bg-primary'>
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
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>
            </button>
          </div>

          {/* User login register widget */}
          <Link to={user ? '/account' : '/login'}>
            <div className='flex items-center gap-3 px-4 py-2 ease-in-out border border-gray-300 rounded-full shadow-sm hover:shadow-gray-300 hover:duration-200 hover:transition hover:shadow-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='black'
                className='w-6 h-6 text-black cursor-pointer size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                />
              </svg>
              <div className='p-1 overflow-hidden text-white bg-gray-500 border border-gray-300 rounded-full cursor-pointer '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='relative w-6 h-6 top-1'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              {!!user && (
                <div className='pr-2 font-semibold text-gray-600 capitalize'>
                  {user.name}
                </div>
              )}
            </div>
          </Link>
        </div>
      </header>

      {/* Medium Screens shown large screens hidden */}
      <div className='hidden md:block lg:hidden'>
        {/* two rows with logo and user menu */}
        <div className='flex items-center justify-between w-full p-4 px-6 mx-auto max-w-7xl'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-2 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-8 h-8 -rotate-90 text-primary'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
              />
            </svg>
            <span className='text-xl font-bold'>Haven</span>
          </Link>
          {/* User widge menu */}
          <Link to={user ? '/account' : '/login'}>
            <div className='flex items-center gap-3 px-3 py-1 transition duration-200 border border-gray-300 rounded-full shadow-sm hover:shadow-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='black'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                />
              </svg>
              <div className='p-1 overflow-hidden text-white bg-gray-500 border border-gray-300 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='relative w-5 h-5 top-1'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              {!!user && (
                <div className='pr-2 text-sm font-semibold truncate max-w-20'>
                  {user.name}
                </div>
              )}
            </div>
          </Link>
        </div>

        {/* Search bar on its own row */}
        <div className='flex justify-center w-full pb-4 lg:block sm:hidden'>
          <div className='flex items-center gap-1 px-2 transition duration-200 border border-gray-300 rounded-full shadow-sm hover:shadow-md'>
            <button className='px-4 py-2 text-sm font-medium'>Anywhere</button>
            <div className='h-8 border-l border-gray-300'></div>
            <button className='px-4 py-2 text-sm font-medium'>Anyweek</button>
            <div className='h-8 border-l border-gray-300'></div>
            <button className='px-4 py-2 text-sm font-medium'>
              Add guests
            </button>
            <button className='p-2 ml-2 text-white rounded-full bg-primary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className='md:hidden'>
        {/* Top bar with logo and user menu */}
        <div className='flex items-center justify-between p-4'>
          <Link to='/' className='flex items-center gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='-rotate-90 w-7 h-7 text-primary'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
              />
            </svg>
            <span className='text-lg font-bold'>Haven</span>
          </Link>

          <Link to={user ? '/account' : '/login'}>
            <div className='flex items-center p-1 px-2 border border-gray-300 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='black'
                className='w-5 h-5 mr-1'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                />
              </svg>
              <div className='overflow-hidden text-white bg-gray-500 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='relative w-5 h-5 top-1'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Search Button */}
      <div className='flex px-4 pb-4 lg:hidden'>
        <button
          onClick={() => setIsSearchExpanded(true)}
          className='flex items-center w-full p-3 border border-gray-300 rounded-full shadow-sm'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-4 h-4 ml-1 mr-3'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
          <div className='text-sm'>
            <span className='font-medium'>Start your search</span>
          </div>
        </button>
      </div>

      {/* Mobile Expanded Search (when clicked) */}
      {isSearchExpanded && (
        <div className='relative min-h-screen bg-black bg-opacity-50'>
          <div className='absolute inset-0 z-50 max-w-6xl pt-4 mx-auto bg-white '>
            <div className='flex items-center px-4 mb-4'>
              <button
                onClick={() => setIsSearchExpanded(false)}
                className='p-2 rounded-full hover:bg-gray-100 max-w-[200px] inline-flex items-center'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 19.5L8.25 12l7.5-7.5'
                  />
                </svg>
              </button>
              <div className='flex-1 font-semibold text-center'>Search</div>
            </div>

            <div className='p-4'>
              <div className=''>
                <div className='py-2 border-gray-300'>
                  <div className='pl-2 text-sm font-bold'>Where</div>
                  <input
                    type='text'
                    placeholder='Search destinations'
                    className='w-full py-4 mt-1 text-sm outline-none'
                  />
                </div>

                <div className='flex border border-gray-300 rounded-2xl'>
                  <div className='flex-1 p-4 border-r border-gray-300'>
                    <div className='text-sm font-bold'>Check in</div>
                    <div className='mt-1 text-sm text-gray-400'>Add dates</div>
                  </div>
                  <div className='flex-1 p-4'>
                    <div className='text-sm font-bold'>Check out</div>
                    <div className='mt-1 text-sm text-gray-400'>Add dates</div>
                  </div>
                </div>

                <div className='flex flex-col p-4 mt-2 border border-gray-300 rounded-2xl'>
                  <div className='text-sm font-bold'>Number of Guests</div>
                  <div className='mt-1 text-sm text-gray-400'>Add guests</div>
                </div>
              </div>

              <button className='flex items-center justify-center w-full gap-2 p-3 mt-4 text-white rounded-lg bg-primary'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2.5}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                  />
                </svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
