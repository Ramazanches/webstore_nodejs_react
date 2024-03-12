import {$authHost, $host} from './index'
import { jwtDecode } from 'jwt-decode'

const REGISTRATION = 'api/user/registration',
			LOGIN = 'api/user/login',
			AUTH = 'api/user/auth',

			setToken = (data) => {
				localStorage.setItem('token', data.token)
				return jwtDecode(data.token)				
			},

			registration = async (email, password) => {
				const {data} = await $host.post(REGISTRATION, { 
					email, 
					password, 
					role: 'ADMIN' 
				})
				setToken(data)
			},

			login = async (email, password) => {
				const {data} = await $host.post(LOGIN, { email, password })
				setToken(data)
			},
			
			check = async () => {
				try {
					const {data} = await $authHost.get(AUTH)
					if (data) {
						setToken(data)
					}
					else {
						console.warn('Not found data') 
					}
				}
				catch (error) {
					console.warn(error)
				}
		
			}

export { registration, login, check }