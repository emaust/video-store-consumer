import React, { Component } from 'react';

class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      returnedMovies: [],
      error: "",
    } 
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
      onSubmit={this.OnSubmitChange}
      >
       <div>
         <label htmlFor="movie-search">Search for Movie: </label>
        <input
          type="text"
          value={this.state.title}
          onChange={this.onInputChange}
          placeholder="Enter movie title"
          />
       </div>
      </form>
    )};
  }

export default Search;