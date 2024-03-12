import {observer} from 'mobx-react-lite'
import { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import DeviceItem from './DeviceItem'
import { Context } from '..'

const DeviceList = observer( () => {

		const {device} = useContext(Context)

		return (
			<Container>
				<Row className="d-flex">
					{
						device.devices.map( device => 
							<DeviceItem key={device.id} device={device} />
						)
					}
				</Row>
			</Container>
		)
	}
)


export default DeviceList