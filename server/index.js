require('dotenv').config()

const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')

const sequelize = require('./db')
const router = require('./routes')
const errHandler = require('./middleware/errorHandling')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
	 .use(express.json())
	 .use(express.urlencoded({ extended: false }))
	 .use(express.static(path.resolve(__dirname, 'static')))
	 .use(fileUpload())
	 .use('/api', router)
	 .use(errHandler)


const start = () => {
	try {
		sequelize.authenticate()
		sequelize.sync()
		app.listen(PORT, () => console.log(`Starting on port ${PORT}`))
	}
	catch (err) {
		console.error('Нет соединения:' + err)
	}
}

start()