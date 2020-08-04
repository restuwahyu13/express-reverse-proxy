require('dotenv').config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const logger = require('morgan')
const app = express()

app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.enable('trust proxy')
app.disable('x-powered-by')

/**
 * @description original request url http://localhost:1945/api/v2/users
 * @description proxy request url http://localhost:3000/v2/users
 */

app.get('/api/v2/users', async (req, res) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  res.json(data)
})

module.exports = { app }
