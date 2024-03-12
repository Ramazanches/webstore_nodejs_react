import { observer } from "mobx-react-lite"
import { useContext, useEffect, useState } from "react"
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap"
import { 
	createDevice, 
	fetchBrands, 
	fetchDevices, 
	fetchTypes 
} from "../../http/deviceAPI"
import { Context } from "../../index"

const CreateDevice = observer(({show, onHide}) => {
	
	const 
		{device} = useContext(Context),
		[name, setName] = useState(''),
		[price, setPrice] = useState(0),
		[file, setFile] = useState(null),
		[info, setInfo] = useState([]),

		addInfo = () => {
			setInfo([...info, {title: '', description: '', number: Date.now()}])
		},
		removeInfo = (number) => {
			setInfo(info.filter( i => i.number !== number ))
		},
		changeInfo = (key, value, number) => {
			setInfo( info.map( i => i.number = number ? {...i, [key]: value} : i ))
		},
		// selectFile = e => setFile(e.target.files[0]),

		addDevice = () => {
			const formData = new FormData()
			formData.append('name', name)
			formData.append('price', price)
			formData.append('img', file)
			formData.append('brandId', device.selectedBrand.id)
			formData.append('typeId', device.selectedType.id)
			formData.append('info', JSON.stringify(info))
			createDevice(formData).then( data => onHide() )
		},

		formChange = (e) => {
			setName(e.target.value)
			setFile(e.target.files[0])
		}

		useEffect(() => {
			fetchTypes().then( data => device.setTypes(data))
			fetchBrands().then( data => device.setBrands(data))
			fetchDevices().then( data => device.setDevices(data.rows))
		}, [device])

	return (
		<Modal>
			
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">
				  Добавить устройство
				</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Form>
					<Dropdown className="mt-3">
						<Dropdown.Toggle>
							{device.selectedType.name || 'Выберите тип'}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{
								device.types.map( type => 
									<Dropdown.Item
                    onClick={device.setSelectedType(type)}
                    key={type.id}
									>
										{type.name}
									</Dropdown.Item>)
							}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="mt-3">
						<Dropdown.Toggle>
							{device.setSelectedBrand.name || 'Выберите бренд'}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{
								device.brands.map( brand => 
                  <Dropdown.Item
                  	onClick={device.setSelectedBrand(brand)}
                  	key={brand.id}
                  >
                  	{brand.name}
                  </Dropdown.Item>
								)
							}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control 
						value={price}
						onChange={e => setPrice(Number(e.target.value))}
						placeholder="Введите стоимость"
						className="mt-3"
						type="number"
					/>
					<Form.Control 
						value={name}
						onChange={formChange}
						placeholder="Введите название"
						className="mt-3"
						type="file"
					/>

					<hr />

					<Button
						variant={"outline-dark"}
						onClick={() => addInfo()}
					>
						Добавить новое свойство
					</Button>

					{
						info.map( item => 
							<Row className="mt-2" key={item.number}>
								<Col md={4}>
									<Form.Control 
                    value={item.title}
                    onChange={ e => changeInfo('title', e.target.value, item.number)}
                    placeholder="Введите название свойства"
									/>
								</Col>
								<Col md={4}>
									<Form.Control 
										value={item.description}
										onChange={ e => changeInfo('title', e.target.value, item.number)}
										placeholder="Введите описание свойства"
									/>
								</Col>
								<Col md={4}>
									<Button
										onClick={() => removeInfo(item.number)}
										variant={"outline-danger"}
									>
										Удалить
									</Button>
								</Col>
							</Row>
						)
					}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button variant="outline-success" onClick={addDevice}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	)
})

export default CreateDevice