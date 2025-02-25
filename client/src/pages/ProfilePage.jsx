import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate, Link, useParams } from 'react-router-dom'
import AccountNav from '../components/AccountNav'
import PlacesPage from './PlacesFormPage'
import axios from 'axios'

// this will be on route /account
const ProfilePage = () => {
  const [redirect, setRedirect] = useState(null)
  const { user, ready, setUser } = useContext(UserContext)
  let { subpage } = useParams() // using const we cant reassign
  // for the /account/profile route
  if (subpage === undefined) {
    subpage = 'profile'
  }

  // function to logout
  async function logout () {
    await axios.post('/logout')
    setRedirect('/')
    setUser(null)
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
  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div className=''>
      <AccountNav />
      {subpage === 'profile' && (
        <div className='flex flex-col items-center justify-center max-w-xl gap-2 mx-auto mt-10 text-center'>
          <div className='text-2xl font-bold'> Logged in as {user.name}</div>
          <div className='mb-4'>{user.email}</div>
          <button
            className='max-w-md px-6 py-2 text-white rounded-full bg-primary'
            onClick={logout}
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
