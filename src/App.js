//import React, { Component } from 'react';
import React, { Component } from 'react';
import './App.css';
import SearchTodo from './SearchTodo';
import Scroll from './Scroll';
import NewTask from './NewTask';
import BigTable from './BigTable';
import ErrorBoundary from './ErrorBoundary';
// import FilterUsers from './FilterUsers';



class App extends Component {
   constructor(props) {
   super(props)
   this.state = {
      todos: [],
      userNames: [], 
      searchfield: '',
      newTodoInfo: {},
      newUserInfo: {}, 
      // filterName: '',
      // filterStatus: '',
   }}
   


   handle_form_input = (ev, newTaskOrUser) => {
      const {id, value } = ev.target;
      if (value) {
         let newItem = {[id]: value};
         newTaskOrUser = Object.assign(newTaskOrUser, newItem);
         console.log(newTaskOrUser)
         return newTaskOrUser;
      }
   }

   
   componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then(tasks => {
            this.setState({todos: tasks})
            // console.log(users)
         });
      fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({userNames: users}));
	}

   onClickDelete = (i, filteredTodos) => {
      let array = [...filteredTodos];
      if(i !== -1) {
         array.splice(i, 1);
         this.setState({todos: array});
      }
   }

   onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});	
	}

   onAddClick =(e, newTodo, newUser) => {
      let len1 = this.state.todos.length;
      let len2 = this.state.userNames.length;
      newTodo['id'] = len1 += 1 ;
      newTodo['userId'] = len2 += 1;
      newUser['id'] = len2;
      this.setState({
         todos: [...this.state.todos, newTodo]
      })
      this.setState({
         userNames: [...this.state.userNames, newUser]
      }) 
      console.log(newTodo)
      console.log(newUser)
      e.preventDefault();
      this.scrollToBottom()
   }

   scrollToBottom = () => {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
   }    
   
   // unique = (data, group) => {
   //    return [...new Set(data.map(item => item[group]))];
   // }
   // onDropChange = (event) => {
	// 	this.setState({filterStatus: event.target.value});	

   // }

   // handleFilterChange = (val) => {
   //    this.setState({filterName: val});
   //    var filteredData;
   //    if(val === ""){
   //      filteredData = this.state.todos;
   //    }else{
   //      filteredData = this.state.todos.filter(function(item) {
   //      return item.completed === val;
   //    })
   //    console.log(filteredData);
   // }};
      

   render(){   
      const {todos, userNames, searchfield, newTodoInfo, newUserInfo} = this.state;
      
      const filteredTodos = todos.filter(todo => {
            return todo.title.toLowerCase().includes(searchfield.toLowerCase())
      })
      
      
      // console.log(this.unique(todos, 'completed'));
      
      return(
         <ErrorBoundary>
            <h1 className='text-muted'>Task Manager</h1>
            <SearchTodo searchChange={this.onSearchChange}/>
            {/* <FilterUsers data={this.unique(todos, 'completed')}/> */}
            <Scroll>
               <BigTable filteredTodos={filteredTodos} userNames={userNames} clickDelete={this.onClickDelete} />
               <div ref={(el) => { this.messagesEnd = el; }}></div>   
            </Scroll>
            <NewTask newTodo={newTodoInfo} newUser={newUserInfo}
               handle_form_input={this.handle_form_input} onAdd={this.onAddClick}
               />      
         </ErrorBoundary>                       
      )
   }

}



export default App;

