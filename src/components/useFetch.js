const axios = require("axios").default;

const UseFetch = async (url) => {
  try {
    const response = await axios.get(url);
    if (response) {
      const dataMovies = response.data;
      return dataMovies;
    } else {
      return null;
    }
  } catch (e) {
    // console.log(e);
    return null;
  }
};

export default UseFetch;
