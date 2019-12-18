import React, { Component } from 'react';
import axios from 'axios';
class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      titleSearch: "",
      searchResults: [],
      error: "",
    } 
  }

  onSubmitSearch = (event) => {
    event.preventDefault();

    let searchTerm = this.state.titleSearch;

    axios.get(`http://localhost:3000/movies?query=${searchTerm}`)

      .then((response) => {
        console.log(response.data)
        this.setState({
          searchResults: response.data
        });
      })
      .catch((error) => {
        this.setState({ events: error })
      })
  }

  onInputChange = (event) => {
    const updatedState = {};
    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  render() { 
    
    return (
      <form
      name="movie-search"
      onSubmit={this.onSubmitSearch}
      >
       <div>
         <label htmlFor="movie-search">Search for Movie: </label>
        <input
          type="text"
          name="titleSearch"
          value={this.state.title}
          onChange={this.onInputChange}
          placeholder="Enter movie title"
          />
          <input
          type="submit"
          value="Submit"
          onClick={this.onSubmitSearch}
          />
       </div>
      </form>
    )};
  }

export default Search;