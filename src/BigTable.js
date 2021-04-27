import React from 'react';
import Table from 'react-bootstrap/Table';

const BigTable = ({filteredTodos, userNames, clickDelete}) => {
	return(
		<Table striped bordered hover variant="dark">
			<thead>
				<tr>
					<th>#</th>
					<th>Status</th>
					<th>Task executor</th>
					<th>Task description</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{ 
					filteredTodos && filteredTodos.map((item, i) => (
						<tr key = {i}>
								<td>{item.id}</td> 
								{item.completed 
									? <td> <div contentEditable suppressContentEditableWarning={true}> {'Done'}</div></td>
									: <td> <div contentEditable suppressContentEditableWarning={true}> {'Not Done'}</div></td>
								}
								{/* <td><div contentEditable suppressContentEditableWarning={true}> {item.completed.toString()}</div></td> */}
								{userNames.map((user,index) => {
									if (user.id === item.userId) {
											return (
												<td key = {index}><div contentEditable suppressContentEditableWarning={true}>{user.username}</div></td>
											);
									} else {
											return null;
									}
								})}
								<td><div contentEditable suppressContentEditableWarning={true}>{item.title}</div></td>
								<td>
									{/* <button style={{marginRight: 5}} type="button" className="btn btn-secondary">Save</button> */}
									<button type="button" className="btn btn-secondary" onClick={() =>
											clickDelete(i, filteredTodos)}> Remove</button>
									
								</td>
						</tr>
					)) 
				}
			</tbody>
		</Table>
	)
}

export default BigTable;