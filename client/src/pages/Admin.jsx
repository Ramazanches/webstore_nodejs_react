import { useState } from "react"
import { Button, Container } from "react-bootstrap"
import CreateBrand from "../components/modals/CreateBrand"
import CreateDevice from "../components/modals/CreateDevice"
import CreateType from "../components/modals/CreateType"

const Admin = () => {

	const 
		[brandVisible, setBrandVisible] = useState(false),
		[typeVisible, setTypeVisible] = useState(false),
		[deviceVisible, setDeviceVisible] = useState(false)
	
	return (
		<Container className="d-flex flex-column">

			<Button 
				className="mt-4" 
				variant="outline-dark" 
				onClick={() => setTypeVisible(true)}>
				Добавить тип
			</Button>

			<Button
				className="mt-4" 
				variant="outline-dark" 
				onClick={() => setBrandVisible(true)}>
				Добавить бренд
			</Button>

			<Button 
				className="mt-4" 
				variant="outline-dark" 
				onClick={() => setDeviceVisible(true)}>
				Добавить устройство
			</Button>

			<CreateBrand 
				show={brandVisible}
				onHide={ () => setBrandVisible(false) }
			/>
			<CreateDevice
				show={deviceVisible}
				onHide={ () => setDeviceVisible(false) }
			/>
			<CreateType 
				show={typeVisible}
				onHide={ () => setTypeVisible(false) }
			/>

		</Container>
	)
}

export default Admin