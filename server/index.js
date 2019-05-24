require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env

app.use(express.json())



app.listen(SERVER_PORT, () => {
    console.log(`working on port ${SERVER_PORT}`)
})