require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const massive = require('massive')
app.use(express.json())
massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    console.log('db connected')
})



app.listen(SERVER_PORT, () => {
    console.log(`working on port ${SERVER_PORT}`)
})