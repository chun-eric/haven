import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './context/UserContext'
import ProfilePage from './pages/ProfilePage'
import PlacesPage from './pages/PlacesPage'

// default base url -> helps shorten our url fetch requests
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true

function App () {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/account/:subpage?' element={<ProfilePage />}></Route>
          <Route
            path='/account/:subpage/:action'
            element={<ProfilePage />}
          ></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
