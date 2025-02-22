import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


// create context creates 2 things. 1. Context Object 2. Provider component
export const UserContext = createContext(); 

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false); // initial user data loading has completed or not
  const navigate = useNavigate();



  // handle Logout function
  async function handleLogout() {
    try {
      await axios.post("/logout");
      setUser(null);
      setReady(false);
      setTimeout(() => navigate("/"), 10);
    } catch (error) {
      console.error("Logout error:", error);
    }
  }


    // initial mount checks if there is a user or not. If not makes a GET request to validate jwt cookie.
    useEffect( () => {
    // remember user already has the cookie installed on the browser
    // we are just checking with the backend to verifiy its the same cookie
      if (!user) {
      axios.get("/profile").then(({data}) => {
        setUser(data)
        setReady(true) // initial user data loading has completed
      })
      }
    }, [])

  return (
    <UserContext.Provider value={{user, setUser, ready, handleLogout}} >
      {children}
    </UserContext.Provider>

  )
}
