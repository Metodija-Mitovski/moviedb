import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  SHOW_SINGLE_MOVIE,
  SHOW_SEARCH_FORM,
  SHOW_ERROR,
  LOADING,
} from "../reducers/actions";
import UseFetch from "../components/useFetch";
import Loading from "../components/loading";
import Error from "../components/error";

const SingleMovie = ({ dispatch, isLoading, error, singleMovie }) => {
  const { id } = useParams();
  const url = "https://www.omdbapi.com/?apikey=473a4b61&i=" + id;
  const {
    Title: title,
    Genre: genre,
    Runtime: runTime,
    Plot: desc,
    Poster: img,
    imdbRating,
  } = singleMovie;

  React.useEffect(() => {
    dispatch({ type: SHOW_SEARCH_FORM, payload: "singleMovie" });
    dispatch({ type: LOADING });
    UseFetch(url).then((resp) => {
      if (resp.Error) {
        dispatch({ type: SHOW_ERROR, payload: "something went wrong..." });
        return;
      }

      dispatch({ type: SHOW_SINGLE_MOVIE, payload: resp });
    });
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <section className="section-center">
      <div className="single-movie-img">
        <img className="single-movie-img" src={img} alt="img" />
      </div>
      <div className="single-movie-data">
        <div className="single-movie-title">
          <h2>{title}</h2>
        </div>
        <p className="data">genres: {genre}</p>
        <p className="data">runtime: {runTime}</p>

        <p className="about">{desc}</p>
        <p className="data">imdb: {imdbRating}</p>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(SingleMovie);
