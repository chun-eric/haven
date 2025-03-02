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


Day 5
- Functionality #1: in addPhotoByUrLink function we update  the addedPhotos array using ```  setAddedPhotos(prev => {
      return [...prev, fileName]
    })```

- now with this addedPhotos array we can render it before the Upload button using map method and a conditional .length > 1
- The url link will be added just before the upload button. Thats good but we want the image to be displayed not a url link. How do we fix this?
- We need to add middleware in index.js on the backend. ```app.use("<destination>", express(static(__dirname + "/uploads")))```
- app.use() is a middleware on Express that runs for every request to our server. 1st parameter is the url path you we want the files to be accessible.
- express.static() is Express middleware for serving static files +  actual folder path on our computer where the files are stored.
- ourdomain.com/uploads/12324jpg for instance Express will automatically servce files from the folder. 
- some syntax errors to fix on the url for static images
- http://localhost:3000/uploads/<photo id>.jpg it will show up statically on the web page. It works!
- So we can handle static images, now we need that image to show up in the addPhotos array.
- Rendered the url link into an image and added it into the addedPhotos array using map to be rendered.
- Functionality for adding url link and adding it as an image to our uploads photo then adding the photos to display in our addPhotos array done!

- Next functionality: #2 Add Upload button functionality so we can upload images directly from our computer. 
- First a nice little trick. Add an input type file inside the button but then change the button to a label tag. That means when you click on the upload label it has all the same functionality. 
- input type file should be hidden in the className
- now how do we go about adding this functionality? First add an onchange event to the upload label.  We want an onchange because it will change the addedPhotos array.
- we use the ```e.target.files``` This is a FileList object that contains each file you uploaded. Each File object represents one file. Each File object has properties like name, size, type (MIME), lastModified etc..
- we can loop through these using a for of loop. Add each file to data which is a FormData. Formdata is great for sending information to the server. 
- we make a axios post request to /upload with our data then the response data we will rename it fileName exactly the same as our addPhotoByUrlLink function and update our addedPhotos array.
- We also need to update our backend endpoint to allow this post request.
- In order for us to upload files we can use a package called multer which handles file uploads in node express
- create multer middleware and storage
- tell multer its an array to handle multiple files with key of "photo" that can accept up to 100 files. .aaray simply means it can handle multiple files. The field key "photos" should match the input name "photos"
- when we make post request to /upload it goes through multer middleware and creates a req.files array object. Inside each file in req.files it has lots of properties as well like fieldname, encdoing mimeType, filename path etc...
- bug** when we try upload a file the Payload is empty the FileList is empty. hmmm...
- change fileName to filename in our funaction in placesPage. We are getting binary and fieldname , original name in network preview and payload. So that means it is being uploaded. However the photo name is getting a long number with .avif file format
- In network privew if you click on each file it has destination, fieldname, mimetype, path, originalname etc. Fixed multer destination to uploads/  for now
- The filename should have an extension but it doesnt.
- We need to grab the path from the req.files from /upload path. ```const { path } = req.files[i]```
- In order to rename files on a server we need to use the fs (file system )package. It is already pre installed in express. Require(fs)
-  we use fs.renameSync(path, newPath)
-  another problem is now we only want to grab the name of the photo and not the /upload/ so we make a new clean path using regex ```const cleanPath = newPath.replace(/^uploads[\/\\]/, '')```
- we push the clean path into in the uploadedFiles array. We return the uploadedFiles array.
- Functionality to add photos upload by user completed. Recap -> /upload enpoint, uploadPhotos function created to upload multiple files from user computer. Multer to save files to uploads folder. req.files object when using multer details each file and its properties. We grabbed each file and extracted its path and filename. We grabbed the extension and make a new clean path. 


Day 6
- getting the checkbox data from Perks component. How do we get the data and send it to our server?
- First add name attribute and onChange handler for each perk input. 
- Each input in the Perks component also have checked={selected.includes("<name></name>")}
- The Perks components has two props, selected and onChange.
- selected={perks} onChange={setPerks}. This creates an array to store selected perks. onChange is a function that handles any updates when checkboxes are clicked.
- handleClick is function that handles any updates for checked perk boxes
- Finished the Perks feature of grabbing all of its selected perks.
- Refactoring code base for the placesPage form. Extracting the url input to add photo and upload photo from user computer into its own component called PhotosUploader.jsx. This includes the two functions uploadPhotos() and addPhotoByUrlLink()
- Completed the form functionality. Now we need to be able to send all its data to the server and database.
- Add onSubmit function called savePlace on the form.
- savePlace function will grab all the state values from the form and send a post request to /places. We grab all our form data inside placeData as an object. 
- This means a user when sending this post request will be able to create a Place schema object.
- We need to make the /places endpoint as well. Remember we already made the Place schema long time ago so import this for our server. 
- But before that we should be able to add new places
- bug** huge refactor a lot of components especially redirecting issues on Placespage.
- Solution refactored all routes in app.jsx. Refactored and rename components to make it much easier and modular. 
```
     <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/account' element={<ProfilePage />} />
          <Route path='/account/places' element={<PlacesPage />} />
          <Route path='/account/places/new' element={<PlacesFormPage />} />
          <Route path='/account/places/:id' element={<PlacesFormPage />} />
          <Route path='/account/bookings' element={<BookingsPage />} />
          <Route path='/account/bookings/:id' element={<BookingsPage />} />
        </Route>
      </Routes>
```
- Separate components for PlacesFormPage which handles routes /account/places/new & /account/places/:id 
- Sepearate componet for PlacesPage which stores all your listing /account/places. It will only show the Add new place button
- My bookins AccountNav will go to the /account/bookings or /account/bookings/:id
- So refactor finish for pages and routes. Finished
- Added some data for the places collection when adding a new place
- Styling the PlacesPage.jsx to represent whats in the places collection from mongodb.
- In order to do this we need to make a get request from /places

Day 7
- setting up endpoints for /places (get request)
- setting up endpoints for /places/:id (get request)
- setting up endpoints for /places  (post request) for adding a place
- updating PlacesFormPage to include useEffect with id dependency array on initial mount. If id exists run a get places:id request if not return.
- Update Perks to to include checked attribute with perks.include("name of perk")
- adding a savePlace function in PlacesFormPage that will either update an exisiting place (id) (put request) or create a new place save (post request)
- added the endpoint for put request at /places (this was hard)
- bug** the images in the places page image isnt showing up when we get it from our database. 
- Solution: http://localhost:3000/uploads/ add this part to our image src. I am confused on this url path. 
- Function: Able to delete any photo and select main cover photo
- How do we do this? In our Place schema our photos: [String] we know this is an array of photos. What we want to do is when we click on a photo it should go to the first in the array. Maybe we can drag and drop instead. Where do we need to add the code? Somewhere in the PhotosUploader component.
- Okay first things first lets add a delete button on each photo in the bottom right. 
- I was confused where addedPhotos came from. Its passed in as props from parent component. addedPhotos is an array of photos added in state in PlacesFormPage.jsx
- Finished deleting a photo from the addedPhotos array in PhotosUploader
- Change main selected photo: creating a function selectAsMainPhoto puts the photo you want at the beginning of the array and adds a filtered array after that. Very nice. 
- What got me stumped for this function is if you dont put the event object and prevent it from submitting it will act very weird and redirect you somewhere. So make sure to e.preventDefault();
- Selecting a new photo as main photo Feature complete.
- Feature: Add drag and drop functionality so i can drag any photos within addedPHotos to any position. Automatically udpates the start as well if its at index 0
- *** Come back to the Drag and Drop functionality *** 


- changed PlacesPage to get user accommodations on the /user-places endpoint which we need to create. Updated useEffect:
```
 useEffect(() => {
    // get place by id. Make sure to add the get endpoint in our index.js
    axios.get('/user-places').then(({ data }) => {
      setPlaces(data)
    })
  }, [])
```

- Feature home page to show all listing and add search functionality. In order for us to get all our places on the Home page we need to use this endpoint. We will need to use useEffect here.
```
// get all places endpoint
app.get('/places', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL) // connect to mongodb
  // get all places
  res.json(await Place.find())
})
```



Day 8
- Add image sliders on each image div
- made a separate image sliders component
- bug** had and event issue handling on goToSlide. I was immediately calling the goToSlide function instead of waiting for the event.
- I forgot to map through each photos and display them 
- the key was on the img div we must do flex-shrink-0. This means each image takes up 100% widht and heigh of its parent div. 
- by mapping through the photos array we can arrange in a row. 
- Need to limit the number of dots to 5. More complex than i thought. This is really really hard. 
- creating a function called showDots
- inside this function we create a start index variable. 
- ```    let start = Math.max(0, Math.min(currentIndex, photos.length - MAX_DOTS))```
- Lets run through an example.
- currentIndex = 2
photos.length - MAX_DOTS = 10 - 5 = 5
Math.min(2, 5) = 2
Math.max(0, 2) = 2
Result: start = 2
Dots shown: [2, 3, 4, 5, 6]
- updated 
- ``` function showDots () {
    // If we have 5 or fewer photos, show all of them
    if (photos.length <= MAX_DOTS) {
      return [...Array(photos.length).keys()] // return an array of numbers from 0 to the length of photos
    }

    //  Create a sliding window of 5 dots, starting from the current index
    let start = Math.max(0, Math.min(currentIndex, photos.length - MAX_DOTS))
    return [...Array(MAX_DOTS)].map((_, i) => start + i) // return an array of numbers from start to start + MAX_DOTS
  }

  const visibleDots = showDots()
  ```
  - Complete basic version of image slider
  - Added city and country to the PlacesFormPage and updated Place model and index js
  - price isnt showing up in our places collection in mongodb. Solution** Just needed to refresh mongodb
  - Added 4 more places. For now i just repeated the ...response.data * 2. I will update it manually later
  - Completed footer except the pages for each link



Day 9
- Single Place plage aka PlacePage. We need to grab the id and fetch a get request to /places/id
- We want the initially mounted so useEffect would be a great choice. 
- In this component we want to seaprate a new PlaceGallery component, Booking widget component and Address Link component. 
- Address Link component complete. Passing data through children and styling through that way. Adding classNames on the component
- Doing the Gallery component layout - much harder than i thought. The confusiong was setting aspect square on each smaller picture and setting explicit heights on bother left and right containers.
- Show more modal box complete
  

Day 10
- Complete responsive header
- Creating a booking widget
- Fix the image slider 


Day 11
-  Fix the booking widget dropdown. Put the custom dropdown into a separate component. 
-   Fix image slider big when clicking on Show all photos
Issues left
-  The booking widget component issues left:
-  Fix calendar format
-  Fix calendar to appear on Click
-  Fix Price to show
-  Automatically add checkin and checkout date based on minimum price.
-  Close button not working
  