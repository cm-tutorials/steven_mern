import React, { Component } from "react";
import "./App.css";
import FlashCard from "./components/flashCard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login"
import Register from "./components/Register"
class App extends Component {
  render() {
    return (
      <Router>
        {" "}
        <div className="App">
          <Route exact path="/" render={() => <FlashCard />} />
          <Route exact path="/login" render ={() => <Login />} />
          <Route exact path="/register" render ={() => <Register />} />
        </div>
      </Router>
    );
  }
}

export default App;
