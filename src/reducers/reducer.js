import { defaultState } from "./state";
import {
  LOADING,
  SHOW_ERROR,
  SHOW_MOVIES,
  SHOW_SEARCH_FORM,
  SHOW_SINGLE_MOVIE,
} from "./actions";

const reducer = (state = defaultState, action) => {
  if (action.type === SHOW_MOVIES) {
    return {
      ...state,
      movies: action.payload,
      isLoading: false,
      error: false,
      // showSearchForm: true,
    };
  }
  if (action.type === SHOW_SINGLE_MOVIE) {
    return {
      ...state,
      singleMovie: action.payload,
      isLoading: false,
    };
  }

  if (action.type === SHOW_ERROR) {
    return {
      ...state,
      error: true,
      isLoading: false,
      errorContent: action.payload,
    };
  }

  if (action.type === LOADING) {
    if (action.payload === "toggleHome") {
      return {
        ...state,
        isLoading: false,
        error: false,
        toggleHome: !state.toggleHome,
        showSearchForm: true,
      };
    }
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === SHOW_SEARCH_FORM) {
    if (action.payload === "homePage") {
      return {
        ...state,
        showSearchForm: true,
      };
    }
    if (action.payload === "singleMovie") {
      return {
        ...state,
        showSearchForm: false,
      };
    }
  }

  return state;
};

export default reducer;
