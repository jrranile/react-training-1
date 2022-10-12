import './App.scss';
import { next, prev } from './actions/GraphActions';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()

  return (
    <div className="App" style={{marginTop: '40%'}}>
      <button onClick={ () => dispatch(next()) }>Next</button>
      <br />
      <button onClick={ () => dispatch(prev()) }>Prev</button>
    </div>
  );
}

export default App;