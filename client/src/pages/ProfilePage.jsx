import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate, Link, useParams } from 'react-router-dom'
import PlacesPage from './PlacesPage'
import axios from 'axios'

const ProfilePage = () => {
  // const [redirect, setRedirect] = useState(null);
  const { user, ready, handleLogout } = useContext(UserContext)
  let { subpage } = useParams() // using const we cant reassign

  // for the /account/profile route
  if (subpage === undefined) {
    subpage = 'profile'
  }

  // if user data is not ready
  if (!ready) {
    return <div>Loading...</div>
  }

  // if user data is ready and user not logged redirect to login page
  // added !redirect or else when we logout it keeps going back to /login
  if (ready && !user) {
    return <Navigate to={'/login'} />
  }

  // redirect to home page if user is logged out
  // if (redirect) {
  //   return <Navigate to={redirect} />
  // }

  // primary button class for active Link
  function linkClasses (type = null) {
    // base classes
    let classes = 'px-6 py-2 rounded-full cursor-pointer inline-flex gap-1 '

    // If this link matches the current subpage
    if (type === subpage) {
      classes += ' bg-primary text-white'
    } else {
      classes +=
        ' bg-gray-100 text-black hover:bg-gray-200 transition duration-100 ease-in'
    }
    return classes
  }

  return (
    <div className=''>
      <nav className='flex justify-center w-full gap-4 mt-20'>
        <Link className={linkClasses('profile')} to='/account'>
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
              d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
            />
          </svg>
          Profile
        </Link>
        <Link className={linkClasses('bookings')} to='/account/bookings'>
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
              d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
            />
          </svg>
          Bookings
        </Link>
        <Link className={linkClasses('places')} to='/account/places'>
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
              d='M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819'
            />
          </svg>
          Accommodations
        </Link>
      </nav>
      {subpage === 'profile' && (
        <div className='flex flex-col items-center justify-center max-w-xl gap-2 mx-auto mt-10 text-center'>
          <div className='text-2xl font-bold'> Logged in as {user.name}</div>
          <div className='mb-4'>{user.email}</div>
          <button
            className='max-w-md px-6 py-2 text-white rounded-full bg-primary'
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
      {subpage === 'places' && <PlacesPage />}
    </div>
  )
}

export default ProfilePage
