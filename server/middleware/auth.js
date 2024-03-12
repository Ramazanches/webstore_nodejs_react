const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {

	const token = req.headers.authorization.split(' ')[1]
	const decoded = jwt.verify(token, process.env.SECRET_KEY)
	const notAuth = () => {
		return res.status(401).json({message: 'Not authorized!'})
	}

	if (req.method === 'OPTIONS') next()

	try {
		if (!token) notAuth()
		req.user = decoded
		next()
	}
	catch (e) { 
		notAuth() 
	}
}