import React from "react";
import MoviesList from "../components/moviesList";
import { connect } from "react-redux";
import { SHOW_MOVIES, SHOW_ERROR, SHOW_SEARCH_FORM } from "../reducers/actions";
import UseFetch from "../components/useFetch";
import Error from "../components/error";
import Loading from "../components/loading";
const Home = ({ movies, dispatch, error, isLoading, toggleHome }) => {
  const url = "http://www.omdbapi.com/?apikey=473a4b61&s&s=movies&y=2020";

  React.useEffect(() => {
    dispatch({ type: SHOW_SEARCH_FORM });
    UseFetch(url).then((resp) => {
      if (resp === null) {
        dispatch({ type: SHOW_ERROR, payload: "Something went wrong..." });
        return;
      }
      if (resp.Response) {
        const moviesArr = resp.Search;
        dispatch({ type: SHOW_MOVIES, payload: moviesArr });
      }
    });
  }, [toggleHome]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <section className="section-movies">
      {movies.map((movie) => {
        const { imdbID: id } = movie;
        return <MoviesList key={id} {...movie} />;
      })}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    error: state.error,
    isLoading: state.isLoading,
    toggleHome: state.toggleHome,
  };
};

export default connect(mapStateToProps)(Home);
