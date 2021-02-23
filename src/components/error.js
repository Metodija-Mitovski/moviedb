import React from "react";
import { connect } from "react-redux";

const Error = ({ errorContent }) => {
  console.log(errorContent);
  return <h1 className="error">{errorContent}</h1>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    errorContent: state.errorContent,
  };
};

export default connect(mapStateToProps)(Error);
