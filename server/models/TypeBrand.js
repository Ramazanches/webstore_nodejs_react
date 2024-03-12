const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const TypeBrand = sequelize.define('type_brand', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: false
	}
})

module.exports = TypeBrand