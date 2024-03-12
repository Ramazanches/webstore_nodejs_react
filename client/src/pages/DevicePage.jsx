import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { fetchOneDevice } from "../http/deviceAPI"
import Star from '../assets/Star.jpg'

const DevicePage = () => {

	const url = process.env.REACT_APP_API_URL,
				[device, setDevice] = useState({ info: [] }),
				{id} = useParams()

	useEffect( () => {
		fetchOneDevice(id).then( data => setDevice(data))
	})
	
	return (
		<Container className="mt-3">
			<Row>

				<Col md={4}>
					<Image width={300} height={300} src={url + device.img} />
				</Col>

				<Col md={4}>
					<Row className="device-row">
						<h2>{device.name}</h2>
						<div 
							className="device-rating" 
							style={{background: `url(${Star})`}}
						>
							{device.rating}
						</div>	
					</Row>	
				</Col>

				<Col md={4}>
					<Card className="device-price">
						<h3>От: {device.price} руб</h3>
						<Button variant={'outline-dark'}>Добавить в корзину</Button>	
					</Card>
				</Col>

			</Row>	

			<Row style={{margin: 3}} className="device-row">
				<h1>Характеристики</h1>	
				{
					device.info.map( (info, index) => 
						<Row
							key={info.id}
							style={{
								background: index % 2 === 0 && 'lightgray',
								padding: 10
							}}
						>
							{info.title}: {info.description}
						</Row>
					)
				}
			</Row>
		</Container>					
	)
}

export default DevicePage