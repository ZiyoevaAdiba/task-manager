import React from 'react';

const SearchTodo = ({searchChange}) => {
  return (
		<div className=' '>
    	<input 
			style={{margin: 5, padding: 20, backgroundColor: 'light-green', textColor: 'white', }} 
			className='form-control'
			type='search' 
			placeholder='search task description here'
			onChange={searchChange}
			></input>
				
		</div>
	)
}

export default SearchTodo;