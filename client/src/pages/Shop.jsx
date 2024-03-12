import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI'
import { Context } from '../index'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import Page from '../components/Page'
import TypeBar from '../components/TypeBar'

const Shop = observer( () => {

		const {device} = useContext(Context)

		useEffect( () => {
			fetchTypes().then(data => device.setTypes(data))
			fetchBrands().then(data => device.setBrands(data))
			fetchDevices(null, null, 1, 2).then(data => {
				device.setDevices(data.rows)
				device.setTotalCount(data.count)
			})
		}, [device])

		useEffect(() => {
			fetchDevices(device.selectedBrand, device.selectedType, device.page, 2).then( data => {
					device.setDevices(data.rows)
					device.setTotalCount(data.count)
				})
		}, [device.page, device.selectedType, device.selectedBrand])

		console.log(device.selectedBrand.id)

		return (
			<Container>
				<Row className="mt-2">

					<Col md={3}>
						<TypeBar />
					</Col>

					<Col md={9}>
						<BrandBar />
						<DeviceList />
						<Page />
					</Col>

				</Row>
			</Container>
		)
	}
)


export default Shop