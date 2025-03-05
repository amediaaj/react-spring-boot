import React , {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed Puppy', rowAssigned: 'User One'}
    ,{rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two'}
    ,{rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One'}
    ,{rowNumber: 4, rowDescription: 'Charge phone battery', rowAssigned: 'User One'}
  ])

  const addTodo = (description, assigned) => {
    let rowNumber = 0;

    if(todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber;
    } else {
      rowNumber = 1;
    }

    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    }
    setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    // margin-top 5 pushes down, container cuts off edges
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todos
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button className='btn btn-primary' onClick={addTodo}>
            Add new todo
          </button>
          <NewTodoForm addTodo={addTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
