import React, { useEffect, useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import {
  LOADING,
  SHOW_ERROR,
  SHOW_MOVIES,
  SHOW_SEARCH_FORM,
} from "../reducers/actions";
import { connect } from "react-redux";
import UseFetch from "./useFetch";

const Navbar = ({ dispatch, showSearchForm, toggleHome }) => {
  const [searchValue, setSearchValue] = useState("");

  let searchUrl = "http://www.omdbapi.com/?apikey=473a4b61&s&s=" + searchValue;

  useEffect(() => {
    UseFetch(searchUrl).then((resp) => {
      if (searchValue) {
        if (resp.Error) {
          dispatch({ type: SHOW_ERROR, payload: "nothing found..." });
        }
        if (resp.Search) {
          dispatch({ type: SHOW_MOVIES, payload: resp.Search });
        }
      }
    });
  }, [searchUrl]);

  return (
    <nav>
      <Link
        className="logo-link"
        to="/"
        onClick={() => {
          dispatch({ type: LOADING, payload: "toggleHome" });
          setSearchValue("");
        }}
      >
        <div className="logo">MDB</div>
      </Link>

      {showSearchForm && (
        <div className="search-holder">
          <form
            className="search-form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              value={searchValue}
              type="text"
              placeholder="input your search words..."
              onChange={(e) => {
                setSearchValue(e.target.value);
                dispatch({ type: LOADING });
                if (e.target.value == "") {
                  dispatch({ type: LOADING, payload: "toggleHome" });
                }
              }}
            />
          </form>
        </div>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Navbar);
