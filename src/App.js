import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

/// import components
import Navbar from "./components/navbar";
import Loading from "./components/loading";
// import pages
import Home from "./pages/home";
import SingleMovie from "./pages/singleMovie";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/singleMovie/:id">
            <SingleMovie />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
