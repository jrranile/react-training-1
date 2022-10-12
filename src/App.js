import './App.scss';
import { next, prev } from './redux/actions/GraphActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useReducer } from 'react';
import { FetchPosts, FetchSinglePosts } from './redux/actions/PostsActions';


function App() {

  const dispatch = useDispatch()
  const graphData = useSelector(state => state.GraphReducer)

  // useEffect(() => {
  //   (
  //     async () => {

  //       await dispatch()
  //       await dispatch()
  //     }
  //   )()
  // }, [])


  return (
    <div className="App" style={{marginTop: '40%'}}>
      <button onClick={ () => dispatch(FetchPosts()) }>Get list</button>
      <br />
      <button onClick={ () => dispatch(FetchSinglePosts(1)) }>Get details</button>
    </div>
  );
}

export default App;