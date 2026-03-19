### Initializing backend
1. Goto the folder
2. npm init
3. npm install express
4. touch index.js / ni index.js                       ,  we can create this file without terminal also
5. in package.json changee the script to
"scripts": {
    "dev": "node index.js"             by doing this, we can simply do npm run dev to run the backend
  },
6. import express
7. create port , const port = process.env.PORT || 3000
8. start the server
9. get request


node index.js this is how we run the script in terminal
but now we simply do , npm run dev

### basics of backend
sensitive info is added in .env file
in .env file we add passwords, ports and other sensitive info example 
PORT=3000
DB_PASSWORD=2342
we create a .gitignore file that contains the files that must be ignored while pushing on github

### Accessing variables from .env file
npm install dotenv                          // in terminal
require('dotenv').config()             
process.env.PORT           

import "dotenv/config"    // this is module js , we can simply access using process.env.PORT


line 6 loads all the variables in process.env 
line 7 is the way to access variables from the .env file, here PORT is the name of variable

### Using express in our project
const express = require('express')          // this  is common js
or
import express from "express"               // this is module js
const app = express()

app is the main Express application object used to define routes and middleware.
to use module js in our index , firstly in package.json we have to do add
"type": "module",

### Start the server
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

The server starts and listens for incoming HTTP requests on the given port.
if " Example app listening on port ${process.env.PORT} " is printed in console then the sever is running 

### Route
app.get("/login", (req, res)=>{
    res.send("<h1>login now</h1>")
})

handles get request
get is the http method.
req → request object
res → response object


### Axios
Axios is a JavaScript library used to make HTTP requests (GET, POST, PUT, DELETE, etc.) from the browser or Node.js.

In simple words:
👉 Axios helps your frontend talk to a backend API and fetch or send data.
Automatic JSON conversion

// usage

 useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })

  } )

  // send data to sever
  axios.post('/api/users', {
  name: "Rahul",
  age: 22
})


the complete url is set in vite config, this is due to CORS

export default defineConfig({
  server:{
    proxy:{
      '/api': 'http://localhost:3000',
    },
  },
  plugins: [react()],
})


