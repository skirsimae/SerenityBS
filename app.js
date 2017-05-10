// Instructions

// Take the website that you built previously, and create a new branch on git so the old version is still available for grading / reviewing.
// Put your website on a Node.js server, so that it can be reached at http://localhost:3000.
// Your Node.js server does not need any routes, since the entire website is static content.
// Check each of your links and images to ensure that they still work.
// Express by default looks for index.html for the first page.


const express = require('express')
const app = express()

app.use('/', express.static('public')) // '/' is the route; express.static('public') means that you will have a folder called 'public'. 

// app.get('/hey' (request, response) => {
//     response.send ('hey')

// })

const listener = app.listen(3000, () => {
    console.log('server has started at ', listener.address().port)
})



