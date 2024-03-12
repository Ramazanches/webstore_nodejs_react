import axios from 'axios'

const url = process.env.REACT_APP_API_URL
const	$host = axios.create({ baseUrl: url })
const	$authHost = axios.create({ baseUrl: url })

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)

export { $host, $authHost }