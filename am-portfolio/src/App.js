import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavMenu from './Components/SideNav/Navbar';
import AboutSection from './Components/About/About';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavMenu />
        <Switch>
          <Route exact path="/about" component={AboutSection} />
        </Switch>
        </div>
        </Router>

    );
  }
}

export default App;
