const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const routePages = require('./routes/pages')
const routeUsers = require('./routes/users')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// set ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// assets
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/', routePages)
app.use('/users', routeUsers)

app.listen(port, console.log('Server is runnig'))