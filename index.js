// import server
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// import routes
const routePages = require('./routes/pages')
const routeUsers = require('./routes/users')

// import database
const { sequelize } = require('./models/_db')

// SERVER
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// set ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// assets
app.use(express.static(path.join(__dirname, 'public')))

// ROUTES
app.use('/', routePages)
app.use('/users', routeUsers)

sequelize.sync().then(() => {
    app.listen(port, console.log('Server is running'))
})