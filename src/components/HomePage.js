import React, { Component } from 'react'
import { Link, Route } from "react-router-dom";
import { URL_MOVIES_LATEST, URL_MOVIES_POPULAR } from '../constants'

export default class HomePage extends Component {
  constructor(props){
    super(props)
    this.state={
      posters: []
    }
  }
  
  componentWillMount(){
    //    console.log(URL_MOVIES_POPULAR)
    fetch(URL_MOVIES_POPULAR)
    .then(res => res.json())
    .then(data => {
      this.setState({posters: data.results})

    })
  }

  render() {
    return (
      <div className="movie-cast-container">
        {this.state.posters.map((im) => (
          <Link to={"/movie/" + im.id}>
            <img className="card" alt={im.title}
              src={"//image.tmdb.org/t/p/w342" + im.poster_path}/>
          </Link>
        ))}
      </div>
    )
  }
}
