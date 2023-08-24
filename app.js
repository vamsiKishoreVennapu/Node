const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', async (req, res, next) => {
  res.send('Hello from express.')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})