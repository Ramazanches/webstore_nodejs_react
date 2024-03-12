const Router = require('express').Router,
			router = new Router(),
			controller = require('../controllers/deviceController')

router.post('/', controller.create)
			.get('/', controller.getAll)
			.get('/:id', controller.getOne)
			.delete('/:id', controller.deleteOne)

module.exports = router