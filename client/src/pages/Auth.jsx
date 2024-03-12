import {observer} from 'mobx-react-lite'
import { useContext, useState } from 'react'
import { Context } from '../index'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN, REGISTRATION, SHOP } from '../utils/path'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { login, registration } from '../http/userAPI'

const Auth = observer( () => {

		let { user } = useContext(Context)
		const [email, setEmail] = useState(''),
					[password, setPassword] = useState(''),
					navigate = useNavigate(),
					location = useLocation(),
					isLogin = location.pathname === LOGIN,

					click = async () => {
						try {
								let data
								if (isLogin) data = await login(email, password)
								else data = await registration(email, password)

								user.setUser(user)
								user.setIsAuth(true)
								navigate(SHOP)
								return data
						}
						catch (e) {
							console.error(e.response.data.message)
						}
					},

					wrapCss = {
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: window.innerHeight - 54
					},

					cardCss = {
						width: 600,
						padding: 5
					},

					titleCss = {
						marginTop: 5,
						marginBottom: 5,
						textAlign: 'center'
					},

					rowCss = {
						display: 'flex',
						justifyContent: 'space-between',
						marginTop: 3,
						paddingLeft: 3,
						paddingRight: 3
					},

					linkCss = {
						marginLeft: 10
					},

					btnCss = {
						margintop: 3,
						alignSelf: 'start',
						width: 50
					}


		return (
			<Container style={wrapCss}>
				<Card style={cardCss}>

					<h2 style={titleCss}>
						{ isLogin ? 'Авторизация' : 'Регистрация' }
					</h2>

					<Form.Control 
						className="mt-2"
						palceholder="Email"
						value={email}
						onChange={ e => setEmail(e.target.value) }
					/>

					<Form.Control 
						type="password"
						className="mt-2"
						placeholder="Password"
						value={password}
						onChange={ e => setPassword(e.target.value)}
					/>

					<Row style={rowCss}>
						{
							isLogin 

							? <div>
									Нет аккаунта ?
									<Link style={linkCss} to={REGISTRATION}>
										Зарегистрируйся
									</Link>
								</div>

							: <div>
									Есть аккаунт ?
									<Link style={linkCss} to={LOGIN}>Войдите</Link>	
								</div>	
						}
					</Row>

					<Button
						style={btnCss}
						variant={'outline-success'}
						onClick={ click }
					>
						{ isLogin ? 'Войти' : 'Регистрация' }
					</Button>		

				</Card>
			</Container>
		)
	}
)


export default Auth