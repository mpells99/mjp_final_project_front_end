import React, { Component } from "react";
import Navbar from "./Navbar/navbar";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>My Photography Company</h1>
        <Navbar />
        <h2>React Redux Router</h2>
        <img className="photo_placeholder" />
      </div>
    );
  }
}
