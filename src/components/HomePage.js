// import React, { Component } from 'react'
// import { Link, Route } from "react-router-dom";
// import { URL_MOVIES_LATEST, URL_MOVIES_POPULAR } from '../constants'

// export default class HomePage extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       posters: []
//     }
//   }
  
//   componentWillMount(){
//     //    console.log(URL_MOVIES_POPULAR)
//     fetch(URL_MOVIES_POPULAR)
//     .then(res => res.json())
//     .then(data => {
//       this.setState({posters: data.results})

//     })
//   }

//   render() {
//     return (
//       <div className="movie-cast-container">
//         {this.state.posters.map((im) => (
//           <Link to={"/movie/" + im.id}>
//             <img className="card" alt={im.title}
//               src={"//image.tmdb.org/t/p/w342" + im.poster_path}/>
//           </Link>
//         ))}
//       </div>
//     )
//   }
// }

import React, { useEffect } from "react";
import {
  fetchMoviesList
} from "../actions";
import { useDispatch, useSelector } from 'react-redux'
import { MovieCard } from "./MovieCard";
import { CardDeck} from "react-bootstrap";
import {Loader} from "./MoviePage"; 


const HomePage = props => {
  document.title = "Popular Movies - Your all-in-one movies home!";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesList())
  }, [])
  const movies = useSelector((state) => state.home.movies);
  const isLoading = useSelector(state => state.home.isLoadingMovies);

  const generateMovieCard = (movies) => {
    return movies.map((movie, idx) => {
      return <MovieCard key={idx} movie={movie} />
    })
  }
  return (
    <div>
      <CardDeck style={{margin:"20px 100px 20px 120px" }}>
              {/* {generateMovieCard(movies)} */}
              {!isLoading?generateMovieCard(movies):<Loader/>}
      </CardDeck>
      {console.log(movies)}

    </div>

  );
}
export default HomePage;