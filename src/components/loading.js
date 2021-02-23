import React from "react";

const Loading = () => {
  return (
    <div className="loader-holder">
      <div className="lds-ripple">
        <div className="loader-color"></div>
        <div className="loader-color"></div>
      </div>
    </div>
  );
};

export default Loading;
