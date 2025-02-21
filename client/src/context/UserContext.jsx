import { createContext, useState, useEffect } from "react";
import axios from "axios";

// create context creates 2 things. 1. Context Object 2. Provider component
export const UserContext = createContext(); 

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);


   // initial mount checks if there is a user or not. If not makes a GET request to validate jwt cookie.
   useEffect( () => {
    // remember user already has the cookie installed on the browser
    // we are just checking with the backend to verifiy its the same cookie
     if (!user) {
      axios.get("/profile").then(({data}) => {
        setUser(data)
      })
     }
   }, [])
  return (
    <UserContext.Provider value={{user, setUser}} >
      {children}
    </UserContext.Provider>

  )
}
