import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Library() {
  return <h2>Library</h2>;
}

function Search() {
  return <h2>Search</h2>;
}

function Customers() {
  return <h2>Customers</h2>;
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <nav>
            <ul>
              <li>
                <Link to="library">Library</Link>
              </li>
              <li>
                <Link to="search">Search</Link>
              </li>
              <li>
                <Link to="customers">Customers</Link>
              </li>
            </ul>
          </nav>
        </div>

    <Switch>
      <Route path="/library">
        <Library />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/customers">
        <Customers />
      </Route>
    </Switch>
    </Router>
    );
  }


}

export default App;
