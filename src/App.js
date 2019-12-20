import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Home from './components/Home';
import Customers from './components/Customers';
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
      libraryCustomers: [],
      selectedCustomer: undefined,
      selectedMovie: undefined,
      successMessage: '',
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

    axios.get('http://localhost:3000/customers')
    .then((response) => {
      this.setState({
        libraryCustomers: response.data
      })
    })
    .catch((error) => {
      this.setState({
        error: error
      })
    })
  }


  selectMovie = (movieID) => {
    const { libraryMovies } = this.state;

    const selectedMovie = libraryMovies.find((movie) => {
      return movie.id === movieID;
    })

    this.setState({
      selectedMovie,
    })
  }

  selectCustomer = (customerID) => {
    const { libraryCustomers } = this.state;

    const selectedCustomer = libraryCustomers.find((customer) => {
      return customer.id === customerID;
    })

    this.setState({
      selectedCustomer,
    })
  }

  addToLibrary = (movie) => {
    console.log('trying to add movie to library')
    const libraryMovies = this.state.libraryMovies;
    libraryMovies.push(movie);
    this.setState({
      libraryMovies,
    })
  }

  callethUponThyAxios = () => {

    console.log('customer id', this.state.selectedCustomer.id)
    console.log('movie title', this.state.selectedMovie.title)

    let dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);
    console.log('dueDate', dueDate)

    axios.post(`http://localhost:3000/rentals/${this.state.selectedMovie.title}/check-out/`, {
      customer_id: this.state.selectedCustomer.id,
      due_date: dueDate,

    })
    .then((response) => {
      console.log('Successfully checked out movie!', response)
      this.setState({
        selectedCustomer: "",
        selectedMovie: "",
        successMessage: "Successfully Checked Out!",
      }
      )
    })
    .catch((error) => {
      console.log('There was an error, unable to checkout movie', error)
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            {/* <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"></img> */}
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
        <div>

    {/* Show success and failure messages */}
    {/* {this.state.successMessage ? <p>{this.state.successMessage}</p> : ""} */}
        </div>
        <div>
          {this.state.selectedMovie ? <p>Selected Movie: {this.state.selectedMovie.title} </p> : "" }
        </div>
        <div>
        {this.state.selectedCustomer ? <p>Selected Customer: {this.state.selectedCustomer.name} </p> : "" }
        </div>
        { this.state.selectedMovie && this.state.selectedCustomer ? 
        <button onClick={this.callethUponThyAxios}>
          Checkout
        </button>
        : ""
        }

      <Switch>
        {/* <Route path="/">
          <Home />
        </Route> */}
        <Route path="/library">
          <Library 
            movies={this.state.libraryMovies} 
            buttonText="Select for Checkout"
            selectMovie={this.selectMovie}
          />
        </Route>
        <Route path="/search">
          <Search 
            addMovie={this.addToLibrary}/>
        </Route>
        <Route path="/customers">
          <Customers
            customers={this.state.libraryCustomers}
            selectCustomer={this.selectCustomer}
          />
        </Route>
      </Switch>
    </Router>
    )}
  }

export default App;
