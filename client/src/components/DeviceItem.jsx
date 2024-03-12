import { Card, Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { DEVICE } from '../utils/path'
import star from '../assets/Star.jpg'

const DeviceItem = ({device}) => {

	const navigate = useNavigate(),
				url = process.env.REACT_APP_API_URL
	
	return (
		<Col 
			md={3}
			sm={1}
			className="mt-3 mx-3"
			onClick = { () => navigate(DEVICE + '/' + device.id) }
		>
			<Card className="cardCss">

				<Image width={150} height={150} src={url + device.img} />

				<div className="rowCss">
					<div>Samsung...</div>
					<div className="d-flex align-items-center">
						<div>{device.rating}</div>
						<Image 
							width={18}
							height={18}
							src={ star }
							className="imgCss" 
						/>
					</div>
				</div>

				<div>{ device.name }</div>

			</Card>
		</Col>
	)
}

export default DeviceItem