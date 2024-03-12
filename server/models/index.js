const User = require('./User'),
			Basket = require('./Basket'),
			BasketDevice = require('./BasketDevice'),
			Device = require('./Device'),
			Type = require('./Type'),
			Brand = require('./Brand'),
			Rating = require('./Rating'),
			DeviceInfo= require('./DeviceInfo'),
			TypeBrand = require('./TypeBrand')

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, {as: 'info'})
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

module.exports = {
	User,
	Basket,
	BasketDevice,
	Device,
	Type,
	Brand,
	Rating,
	DeviceInfo,
	TypeBrand
}