import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPosts, FetchSinglePosts } from './redux/actions/PostsActions';

function App() {
  const dispatch = useDispatch()
  const postsReducer = useSelector(state => state.postsReducer)
  const posts = Object.entries(postsReducer.list).map(x => x[1])

  return (
    <>
      <div>
        {posts.forEach(element => (
          element.userId  
        ))}
      </div>

        <div className="App" style={{marginTop: '40%'}}>
          <button onClick={ () => dispatch(FetchPosts()) }>Get list</button>
          <br />
          <button onClick={ () => dispatch(FetchSinglePosts(1)) }>Get details</button>
        </div>
    </>

  );
}

export default App;