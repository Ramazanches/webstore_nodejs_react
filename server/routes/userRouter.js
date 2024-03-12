const Router = require('express'),
			router = new Router(),
			controller = require('../controllers/userController'),
			authMiddleware = require('../middleware/auth')

router.post('/registration', controller.registration)
			.post('/login', controller.login)
			.get('/auth', authMiddleware, controller.check)

module.exports = router