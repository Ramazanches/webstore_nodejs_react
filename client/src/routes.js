import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Shop from './pages/Shop'
import Auth from './pages/Auth'
import DevicePage from './pages/DevicePage'
import {ADMIN, LOGIN, REGISTRATION, SHOP, BASKET, DEVICE} from './utils/path'

const adminRoutes = [
	{ 
		path: ADMIN, 
		element: <Admin /> 
	},
	{ 
		path: BASKET, 
		element: <Basket />
	}
]

const publicRoutes = [
	{ 
		path: SHOP, 
		element: <Shop /> 
	},
	{ 
		path: LOGIN, 
		element: <Auth /> 
	},
	{ 
		path: REGISTRATION, 
		element: <Auth /> 
	},
	{ 
		path: DEVICE + '/:id', 
		element: <DevicePage />
	}
]

export {adminRoutes, publicRoutes}