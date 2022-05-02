import React from 'react';
import './App.css';
import  TodoForm from './ToDoForm'
import  Todo from './ToDo'



function App() {

  //const [show, setShow] = React.useState( false ) 
  const [alertmsg, setAlertmsg] = React.useState("List for the incoming projects") 
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ])

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
    setAlertmsg(`Added Item '${text}' succesfully`);
  }
  
  const removeTodo = index => {
    let temp = [...todos];    
    let deletedItem = temp.splice(index, 1);
    setTodos(temp);
    setAlertmsg(`Removed Item '${deletedItem[0].text}' succesfully`);    
  }

  React.useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the original message
      setAlertmsg("List for the incoming projects")
    }, 3000)
    return () => {
      clearTimeout(timeId)
    }
  } );


  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1> TODO List </h1>
      </header>            

          <div className="app">
            <div className='cssAlert' >
                <p> {alertmsg} </p>
            </div>   

            <div className="todo-list" >
                <div>
                  <TodoForm addTodo={addTodo}>  </TodoForm>
                </div>   
                <hr />

                {todos.map((todo, i) => (
                  <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
                ))}
                
            </div>
          </div>
    </div>
    </>
  );
}

export default App;
