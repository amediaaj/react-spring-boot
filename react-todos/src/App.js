import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // margin-top 5 pushes down, container cuts off edges
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todos
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>Feed dog</td>
                <td>Cassidy</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Get haircut</td>
                <td>Alex</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
