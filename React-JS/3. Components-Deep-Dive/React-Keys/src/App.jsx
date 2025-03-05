
import { useState } from 'react'
import './App.css'
import MovieListItem from './components/MovieListItem';

function App() {

  const [movies, setMovie] = useState([
    { id:1, title: 'Ariel'},
    { id:2, title: 'Ledena epoha'},
    { id:3, title: 'Barbie'},
    { id:4, title: 'Winx'},
    { id:5, title: 'Ariel'}
  ])

  let movieElements = [];
  // for(const movie of movies){
  //   movieElements.push(<li>{movie}</li>);
  // }
  const removeFirstHandler = () =>{
    movies.shift();

    //! When updating state with reference type we nieed to set new reference on update
    setMovie([...movies]);
    // setMovie(movies.slice())
  }

  // * Keys should be unique among siblings
  // * Keys should be unchanged between renders

  return (
    <>  
        <h2>Movie List</h2>
        <ul>
            {movies.map(movie =>(
              <MovieListItem key={movie.id} movie={movie}/>
            ))}
        </ul>

        <button onClick={removeFirstHandler}>Remove First</button>
    </>
  )
}

export default App
