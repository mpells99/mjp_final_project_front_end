import React, { Component } from "react";
import NavigationContainer from "./Navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  render() {
    return (
      // render() {
      // return (
      <div className="app">
        {/* <Navbar /> */}
        <div className="container">
          <Router>
            <div>
              <NavigationContainer />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about-me" component={About} />
                <Route path="/contact" component={Contact} />

                <Route component={NoMatch} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
