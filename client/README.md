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
-  Creating JWT cookie in /login