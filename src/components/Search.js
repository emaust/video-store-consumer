import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Library from './Library';
class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      titleSearch: "",
      searchResults: [],
      success: "",
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

  callUponAxios = (movieData) => {
    axios.post('http://localhost:3000/movies', movieData)
    .then((response) => {
      console.log('response', response)
      this.props.addMovie(movieData)
      this.setState(
        {success: `added ${movieData.title} to database`}
      )
    })
    .catch((error) => {
      console.log('error',error)
      this.setState(
        {error: `got an error when trying to add ${movieData.title} to database`}
      )
    })
    // .finally to clear success and error state?
  }

  render() { 
    
    return (
      <div>
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

        <div>
          {this.state.searchResults ? 
            <Library 
              movies={this.state.searchResults} 
              buttonText="Add to El Video's Rental Library"
              onMovieButtonClick={this.callUponAxios}
            /> 
            : "" 
          }
        </div>

      </div>
    )}
  }

export default Search;
