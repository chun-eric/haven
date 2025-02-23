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
- Creating a new Place Schema
- Created a new PlacesPage
- Add new Route /account/:subpage/:actionOrId in App.jsx
- created a new add place button when clicking on my accomodation. Added a link to /account/places/new
- When add new place is clicked it links to /account/places/new
- new Placesform on the /account/places/new
- Adding lots of details to the PlacesForm add new

Day 4
- Fixed the perks design
- Adding the additional info and checkin checkout time max number of guests and price per night
- Adding all the state for each input in the PlacesPage Form. There is around 10 - 11 states.
- creating a header function and description function then combinign them together to create a header and description function to format and set section titles and description.
- separated the Perks from PlacesPage into its own separate component for cleaner code
- the Perks need the selected and onChange values as well. We pass the perks and setPerks state values as props to the Perks component. selected=perks and onChange=setPerks
- with each input in the PlacesPage we need to set the state value and setter function values for onChange. So, basically adding value and onChange attributes to each input and textArea
- Uploading image by a url link. 
  1. Add button onClick functionality. Add function here called addPhotoByUrlLink. This function will take a link.
  2. The function will then upload the photo to our backend server uploads folder. This will hold all our uploaded files.
  3. It will then return a link in our api server directory
  4. Create new directory in api > uploads
  5. We need an api endpoint that takes the link and adds it to the uploads folder
  6. Create the api endpoint first to receive the uploaded file. /upload-by-link
  7. image-downloader is a package that helps download images by url. Install it and add the url and dest keys
  8. use a Date.now to make a unique file name
  9. add it to the destination path
  10. res.json("/uploads" + newName)
- Adding a addPhotoByUrlLink to the add button in PlacesPage
- make a async axios post request to upload-by-link
- rename the data payload to fileName