import './App.css';
import JokeBox from './containers/JokeBox/JokeBox';
import MovieApp from './containers/MovieApp/MovieApp';

const App = () => {

  return (
    <>
      <div className="container d-flex gap-2 mt-2">
        <div className="col-7 border p-3">
          <MovieApp/>
        </div>
        <div className="col-5 border p-3">
          <JokeBox/>
        </div>
      </div>
    </>
  );
};


export default App;
