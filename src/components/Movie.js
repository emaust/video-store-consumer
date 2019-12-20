import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css'

const Movie = (props) => {

  const { title, imageUrl, overview, releaseDate, buttonText, onButtonClick } = props;
  // use id from props??

  return (
    <div className="card movie-card">
      <section className="card movie-card-header">
        {title}  --  {releaseDate}
      </section>
      <img class="card-img-top img-fluid" src={imageUrl} alt="Movie Image" />
      
      <section className="movie-card-body">
        {overview}
      </section>

      <button className="btn btn-primary" onClick={onButtonClick} >
        {buttonText}
      </button>
    </div>
  )
}

export default Movie;

