import {observer} from 'mobx-react-lite'
import { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {Context} from '../index'
import { ADMIN, LOGIN, SHOP } from '../utils/path'

const NavBar = observer( () => {

		const {user} = useContext(Context),
					navigate = useNavigate(),
					logOut = () => {
						user.setUser({})
						user.setIsAuth(false)
						localStorage.removeItem('token')
					}

		return (
			<Navbar bg="dark" data-bs-theme="dark">
				<Link 
					style={{color: 'white'}}
					to={SHOP}
				>
					КупиДевайс
				</Link>
				<Container>
					{
						user.isAuth 
						? <Nav className="me-auto" style={{color: 'white'}}>
								<Button 
									onClick={() => navigate(ADMIN)}
									variant="outline-light">
									Админ панель
								</Button>
								<Button
									onClick={() => logOut()}
									variant="outline-light"
									className="ml-4">
									Выйти	
								</Button>
							</Nav>
						: <Nav style={{color: 'white'}}>
								<Button
									variant="outline-light"
									onClick={() => navigate(LOGIN)}>
									Авторизция
								</Button>
							</Nav>
					}
				</Container>
			</Navbar>
		)
	}
)


export default NavBar