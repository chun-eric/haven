import { useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";


const Header = () => {
  const { user} = useContext(UserContext)
  
  return (
    <div>
      <header className='flex items-center justify-between p-6'>
        {/* Logo */}
        <Link to='/' className='flex items-center gap-1'>
  
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-8 h-8 -rotate-90 '
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
              />
            </svg>
            <span className='text-xl font-bold'>Haven</span>

        </Link>

        {/* Search widget */}
        <div className='flex items-center gap-5 px-4 py-2 border border-gray-300 rounded-full shadow-md shadow-gray-300 '>
          <div className='pl-3 text-base font-bold'>Anywhere</div>
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
        <Link to={ user ? '/account' : '/login'}>
          <div className='flex items-center gap-3 px-4 py-2 border border-gray-300 rounded-full '>
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
             {
              !!user && (
                <div className="pr-2 font-semibold text-gray-600 capitalize">
                {user.name}
                </div>
             )}
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Header;
