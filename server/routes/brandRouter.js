const Router = require('express'),
			router = new Router(),
			controller = require('../controllers/brandController')

router.post('/', controller.create)
router.get('/', controller.getAll)

module.exports = router
