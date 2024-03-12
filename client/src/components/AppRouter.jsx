import { useContext } from "react"
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import { publicRoutes, adminRoutes } from '../routes'
import { Context } from '../index'
import { SHOP } from '../utils/path'

const setRedirect = (routes) => {
	const redirect = {
		path: '*',
		element: <Navigate to={SHOP} replace />
	}
	routes.push(redirect)
}

const AppRouter = () => {

	const {user} = useContext(Context)
	let routes

	if (user.isAuth) routes = adminRoutes.concat(publicRoutes)

	routes = publicRoutes

	setRedirect(routes)

	const router = createBrowserRouter(routes)

	return ( <RouterProvider router={router} /> )

}

export default AppRouter