require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const massive = require('massive')
const house_ctrl = require('./controller/houseController')
app.use(express.json())
massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    console.log('db connected')
})

app.get('/api/houses', house_ctrl.get_houses)
app.post('/api/house', house_ctrl.create_house)
app.delete('/api/house/:id', house_ctrl.delete_house)

app.listen(SERVER_PORT, () => {
    console.log(`working on port ${SERVER_PORT}`)
})