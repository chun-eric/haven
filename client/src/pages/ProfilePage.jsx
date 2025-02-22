import {useState, useContext} from "react";
import { UserContext } from "../context/UserContext";
import {  Navigate, Link, useParams } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {

  const [redirect, setRedirect] = useState(null);
  const {user, ready, handleLogout} = useContext(UserContext)
  let {subpage} = useParams(); // using const we cant reassign

  // for the /account/profile route  
  if (subpage === undefined) {
    subpage = "profile"
  }

  // if user data is not ready
  if (!ready) {
    return <div>Loading...</div>
  }

  // if user data is ready and user not logged redirect to login page
  // added !redirect or else when we logout it keeps going back to /login
  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  }



  // redirect to home page if user is logged out
  if (redirect) {
    return <Navigate to={redirect} />
  }

  // primary button class for active Link
  function linkClasses(type = null) {
    // base classes
    let classes =  "px-6 py-2 rounded-full cursor-pointer "
    
    // If this link matches the current subpage
    if (type === subpage) {
      classes += " bg-primary text-white"
    } else {
      classes += " bg-gray-100 text-black hover:bg-gray-200"
    }
    return classes;
}

  
   return <div className="">
    <nav className="flex justify-center w-full gap-4 mt-20">
      <Link className={linkClasses("profile")} to="/account">Profile</Link>
      <Link className={linkClasses("bookings")} to="/account/bookings">Bookings</Link>
      <Link className={linkClasses("places")} to="/account/places">Accommodations</Link>
    </nav>
    {
      subpage === "profile" && (
        <div className="flex flex-col items-center justify-center max-w-xl gap-2 mx-auto mt-10 text-center">
          <div className="text-2xl font-bold"> Logged in as {user.name}</div>
          <div className="mb-4">{user.email}</div>
          <button className="max-w-md px-6 py-2 text-white rounded-full bg-primary" onClick={handleLogout}>Logout</button>
        </div>
      )
    }
  </div>;
};

export default ProfilePage;
