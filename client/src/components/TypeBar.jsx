import {useContext} from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '../index'


const TypeBar = () => {

	const {device} = useContext(Context)
	
	return (
		<ListGroup>
			{
				device.types.map( type => 
					<ListGroup.Item
						action
						variant="light"
						style={{cursor: 'pointer'}}
						key={type.id}
						onClick={() => device.setSelectedType(type)}
					>
						{type.name}
					</ListGroup.Item>
				)
			}
		</ListGroup>	
	)
}

export default TypeBar