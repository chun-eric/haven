# Haven

Day 1

- Header created
- Login Page and Register Page
- API basic Endpoints for Login and Register page
- Async functions using Axios on the client side
- Added cors on the backend
- sending a post request on the registerPage to our backend
- in our server adding a post route /register to receive the post request in the req.body from client
- bug\*\* cannot destructure property name of req.body as it is undefined 500 internal server error
- solution: need to use express.json() in the app instance
- create a mongodb database called haven
- add mongoose to connect to our mongodb
- installed dotenv
- made a User model and import it into index.js
- install bcrypt to encrypt passwords when it gets sent to our database and when we receive it from the client
- added bcrypt to add hashing and salt to the password

Day 2
- Register function for /register endpoint is finished including basic error handling for duplicate email and overall registration fail
- Login function /login in the login page using axios
- creating /login endpoint in index.js with some basic error handling
- adding Json Web Token to create on the server to send back to the user for better login security and authentication. Add JWT in the response headers
-  Creating JWT cookie in /login using jwt.sign()
-  Check JWT cookie in browser > application or Headers > SetCookies. Hmm not being stored in the browser cookies. Added ```axios.defaults.withCredentials = true;``` in our main app
-  Login Functionality working
-  Redirect to Home after successful Login
-  Creating a context for all possible routes. Why? If logged in we can show certain components and routes. Created UserContextProvider and UserContext. Wrapped the UserContextProvider in App.jsx
-  Setup up user states in UserContext. Use this context for our login page
-  Added user and setUser state in UserContextProvider
-  Passed UserContext to LoginPage with axios post request 
-  Added UserContext on the Header to show the user name when logged in
-  Keeping UserContext even after page refresh. Adding a useEffect on initial mount to check if there is a logged user. If there isnt a user it will make  GET request to /profile endpoint to see if there is a valid cookie/token stored in the browser. If present, backend will validate and send back the user data in the req.cookies. However we get 500 internal error. We need a middleware called cookie-parser to be able to read cookies from the get request.
-  Added cookie-parser in our express in order to read jwt 
-  Complete /profile end with jwt.verify()
-  update our useEffect GET request with the data returned and update the setUser setter function
-  bug** when i refresh the name keeps disappearing why? Solution - in index.js i had in /profile ```res.json(name, email, _id)``` instead of ```res.json({name, email, _id})```
-  Added Profile Page link if user logged in in header
  

Day 3
- Add Login page link when clicking on header icon 
- creating /account page called Profile Page.
- adding ready state within UserContext for making sure user data is uploaded and ready before proceeding
- using useParams within Profile page to add /account/bookings /account  /account/places
- adding dynamic button classes called LinkClasses based on subpage chosen
- adding profile subpage content
- adding logout feature and button for profile subpage content
- adding /logout endpoint in index.js in the backend
- clearing cookie in the backend for our logout function
- redirect back to home page after logout
- bug** when i tried to logout it keeps redirecting me back to /login
- solution: move logout function to useContext so all pages have access to it. 
- added a very small setTimeout when navigationg back to homepage after logout
- in the handleLogout function changed setUser and setReady inside here before executing the setTimeout 10ms later
- the logout function takes 2ms to run its tasks so it give enought time for us to navigate back to "/"
- bug** when i login then logout it works. I login again but then it states Loading.... that means the ready state is false. how can we fix? 
- solution:  removed ``` setReady(false)``` on  handleLogout. This is waht is causing it be stuck on loading.... Is it big security risk no. Cookies are cleared from the /logout endpoint. We dont want it as a depednecy array in useEffect or it will cause infinite loop. The routes check for both ready and setUser is null. So it should be fine. 