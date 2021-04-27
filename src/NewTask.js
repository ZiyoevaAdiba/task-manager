import React from 'react';


const NewTask = ({filteredTodos, userNames,newUser, newTodo, handle_form_input, onAdd, myref}) => {

	return (
		<div className="form-row">
			<div className="form-group col-md-1">
				<select id="completed" className="form-control"
					onChange={(e)=> handle_form_input(e, newTodo )}>
					<option defaultValue='Not Done' value='false'>Not Done</option>
					<option value='true'>Done</option>
				</select>
			</div>
			<div className="form-group col-md-3">
				<input type="text" 
					className="form-control" 
					id="username" 
					placeholder="Task Executor"
					onInput={(e)=> handle_form_input(e, newUser = {})}
					></input>
			</div>
			<div className="form-group col-md-7">
				<input type="title" 
					className="form-control" 
					id="title" 
					placeholder='Task Description'
					onInput={(e)=> handle_form_input(e, newTodo = {})}
					></input>
			</div>
			<button 
				type="submit" 
				className="form-control btn btn-secondary col-md-1" 
				//filteredTodos.concat()
				onClick={(e) => onAdd(e, newTodo, newUser) }

				>Add</button>
  	</div>	
	)
}

export default NewTask;