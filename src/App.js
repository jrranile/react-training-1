import './App.scss';
import { next, prev } from './redux/actions/GraphActions';
import { useDispatch, useSelector } from 'react-redux';
import { exampleApi } from './api';
import { useEffect, useReducer } from 'react';

function App() {

  const dispatch = useDispatch()
  const graphData = useSelector(state => state.GraphReducer)

  useEffect(() => {
    (
      async () => {
        await exampleApi.get('/posts')
      }
    )()
  }, [graphData.id])

  console.log(graphData);

  const handleCheckout = () => {
    dispatch(next())
    dispatch(prev())
  }

  return (
    <div className="App" style={{marginTop: '40%'}}>
      <button onClick={ () => dispatch(next()) }>Next</button>
      <br />
      <button onClick={ () => dispatch(prev()) }>Prev</button>
      { graphData.id }
    </div>
  );
}

export default App;