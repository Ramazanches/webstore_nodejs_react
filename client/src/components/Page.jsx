import {observer} from 'mobx-react-lite'
import { useContext } from 'react'
import { Pagination } from 'react-bootstrap'
import { Context } from '..'

const Page = observer( () => {

		const {device} = useContext(Context),
					pageCount = Math.ceil(device.totalCount / device.limit),
					pages = []

		for (let i = 0; i < pageCount.length; i++) {
			pages.push(i + 1)
		}

		return (
			<Pagination className="mt-5">
				{
					pages.map( page => 
						<Pagination.Item
							key={page}
							active={device.page === page}
							onClick={() => device.setPage(page)}
						>
							{page}
						</Pagination.Item>
					)
				}
			</Pagination>
		)
	}
)


export default Page