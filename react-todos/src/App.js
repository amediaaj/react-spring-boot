import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    {rowNumber: 1, rowDescription: 'Feed Puppy', rowAssigned: 'User One'}
    ,{rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two'}
    ,{rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One'}
  ]

  return (
    // margin-top 5 pushes down, container cuts off edges
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todos
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
