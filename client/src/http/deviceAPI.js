import {$authHost, $host} from './index'

const urlType = 'api/type',
			urlBrand = 'api/brand',
			urlDevice = 'api/device',

			createType = async (type) => {
				const {data} = await $authHost.post(urlType, type)
				return data
			},

			fetchTypes = async () => {
				const {data} = await $host.get(urlType)
				return data
			},

			createBrand = async (brand) => {
				const {data} = await $authHost.post(urlBrand, brand)
				return data
			},

			fetchBrands = async () => {
				const {data} = await $host.get(urlBrand)
				return data
			},

			createDevice = async (device) => {
				const {data} = await $authHost.post(urlDevice, device)
				return data
			},

			fetchDevices = async (brandId, typeId, page, limit = 5) => {
				const {data} = await $host.get(urlDevice, { 
					params: { 
						brandId, typeId, limit, page 
					}
				})
				return data
			},

			fetchOneDevice = async (id) => {
				const {data} = await $host.get(urlDevice + '/id')
				return data
			}

	export {
		createType,
		fetchTypes,
		createBrand,
		fetchBrands,
		createDevice,
		fetchDevices,
		fetchOneDevice
	}