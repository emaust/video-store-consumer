import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Home from './components/Home';

import Search from './components/Search';
import Library from './components/Library';

// import Customers from './components/Customers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      libraryMovies: [],
      selectedCustomer: undefined,
      selectedMovie: undefined,
      error: '',
    };
  }

  componentDidMount () {
    axios.get('http://localhost:3000/movies')
    .then((response) => {
      this.setState({
        libraryMovies: response.data
      })
    })
    .catch((error) => {
      this.setState({
        error: error
      })
    })
  }

  selectMovie (movieID) {


  }

  addToLibrary = (movie) => {
    console.log('trying to add movie to library')
    const libraryMovies = this.state.libraryMovies;
    libraryMovies.push(movie);
    this.setState({
      libraryMovies,
    })

  }

  render() {
    return (
      <Router>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">El Video</h1>
        </header>

          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
            </ul>
          </nav>
        </div>

    <Switch>
      {/* <Route path="/">
        <Home />
      </Route> */}
      <Route path="/library">
        <Library 
          movies={this.state.libraryMovies} 
          selectMovie={this.selectMovie}
        />
      </Route>
      <Route path="/search">
        <Search 
          addMovie={this.addToLibrary}/>
      </Route>
      {/* <Route path="/customers">
        <Customers />
      </Route> */}
    </Switch>
    </Router>
    );
  }
}

export default App;
