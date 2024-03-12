const jwt = require('jsonwebtoken')

module.exports = () => (req, res, next) => {

	const notAuth = () => res.status(401).json({message: 'Not authorized!'}),
				notAcess = () => res.status(403).json({message: 'Not access'}),
				token = req.headers.authorization.split(' ')[1],
				decoded = jwt.verify(token, process.env.SECRET_KEY)

	if (req.method === 'OPTIONS') next()

	try {

		if (!token) notAuth()
		if (decoded.role !== role) notAcess()

		req.user = decoded
		next()
		
	}
	catch (e) { notAuth() }
}