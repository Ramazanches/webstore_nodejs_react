const Router = require('express'),
			router = new Router(),
			controller = require('../controllers/typeController'),
			checkRole = require('../middleware/checkRole')

router.post('/', checkRole('ADMIN'), controller.create)
			.get('/', controller.getAll)

module.exports = router