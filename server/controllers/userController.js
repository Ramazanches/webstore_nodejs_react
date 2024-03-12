const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/')

const generateJwt = (id, email, role) => {
	return jwt.sign(
		{id, email, role},
		process.env.SECRET_KEY,
		{expiresIn: '24h'}
	)
}

class UserController {

	async registration (req, res, next) {
		try {

			const {email, password, role} = req.body,
						hashPassword = await bcrypt.hash(password, 5),
						candidate = await User.findOne({where: {email}}),
						user = await User.create({email, role, password: hashPassword}),
						basket = await Basket.create({userId: user.id}),
						token = generateJwt(user.id, user.email, user.role)

			if (!email || !password) {
				return next(ApiError.badRequest('Bad email or password'))
			}

			if (candidate) return next(ApiError.badRequest('User is already exist'))

			return res.json({token})	

		} 
		catch (e) { console.log(e) }

	}

	async login (req, res, next) {
		try {

			const {email, password} = req.body,
						user = await User.findOne({where: {email}}),
						token = generateJwt(user.id, user.email, user.role)

			let comparePassword = bcrypt.compareSync(password, user.password)

			if (!comparePassword) return next(ApiError.internal('Bad password'))
			if (!user) return next(ApiError.internal('User not found'))

			return res.json({token})		
				
		} 
		catch (e) { console.log(e) }

	}

	async check (req, res, next) {
		try {
			const token = generateJwt(req.user.id, req.user.email, req.user.role)
			return res.json(token)			
		} 
		catch (e) { console.log(e) }
	}
	
}

module.exports = new UserController()