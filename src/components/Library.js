import React, { Component } from 'react';
import Movie from './Movie';

const Library = ({movies, buttonText, selectMovie}) => {
  const movieComponents = movies.map((movie) => {
    return (
      <Movie 
        key={movie.id}
        inventory={movie.inventory}
        title={movie.title}
        overview={movie.overview}
        releaseDate={movie.release_date}
        imageUrl={movie.image_url}
        buttonText={buttonText}
        onButtonClick={ () => selectMovie(movie.id)}
      />
    )
  })

  return (
    <div>
      {movieComponents}
    </div>
  )
}


export default Library;
