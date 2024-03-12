import {observer} from 'mobx-react-lite'
import {useContext, useEffect, useState} from 'react'
import 	{ Spinner } from 'react-bootstrap'
import 	{ BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/Navbar'
import 	{ check } from './http/userAPI'
import 	{ Context } from './index'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = observer( () => {

	const { user } = useContext(Context),
				[loading, setLoading] = useState(true)


	console.dir(user)

	useEffect( () => {
		check().then( data => {
			user.setUser(data)
			user.setIsAuth(true)
		}).finally(() => setLoading(false))		
	}, [])

	// if (loading) return <Spinner animation={"grow"} />

	return (
		<div>

			{loading && <Spinner animation={"grow"} />}

			<BrowserRouter>
				<NavBar></NavBar>
			</BrowserRouter>

			<AppRouter />

		</div>
	)
})


export default App