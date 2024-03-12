const {Type} = require('../models/')
const ApiError = require('../error/ApiError')

class TypeController {

	async create (req, res) {
		try {
			const {name} = req.body
			const type = await Type.create({name})
			return res.json(type)			
		} 
		catch (e) { console.log(e) }

	}

	async getAll (req, res) {
		try {
			res.json({message: 'Works'})			
		} 
		catch (e) { console.log(e) }
	}
}

module.exports = new TypeController()