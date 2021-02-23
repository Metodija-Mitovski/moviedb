import React from "react";
import { Link } from "react-router-dom";

function MoviesList(props) {
  const { Title: name, Poster: img, Year: year, imdbID: id } = props;

  return (
    <>
      <Link to={`/singleMovie/${id}`} className="single-movie-link">
        <div className="movie">
          <div className="img-holder">
            <img className="movies-img" src={img} alt="imgage not available" />
          </div>
          <div className="title-holder">
            <h3>{name}</h3>

            <h5>{year}</h5>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MoviesList;
