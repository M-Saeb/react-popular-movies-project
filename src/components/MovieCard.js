import React from "react";
import { Link } from "react-router-dom";
import "./MoviePage.css"
import { Card } from "react-bootstrap";


export const MovieCard = ({ movie }) => {
    return (
        <div>
            <Link to={"/movie/" + movie.id} >
                <Card key={movie.id} style={{ width: '12rem',marginBottom:"20px" }} text="black">
                    <Card.Img
                        variant="top"
                        src={"//image.tmdb.org/t/p/w342" + movie.poster_path}
                        alt="poster" />
                    <Card.Body style={{minHeight:"90px"}}>
                        <h6>{movie.title}</h6>
                    </Card.Body>
                </Card>
            </Link>

        </div>
    )
}

export default MovieCard;