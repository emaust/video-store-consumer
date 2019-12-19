import React from 'react';

const Movie = (props) => {

  const { title, imageUrl, overview, releaseDate, buttonText, onButtonClick } = props;
  // use id from props??

  return (
    <div className="movie-container">
      <section>
        <h3>
          {title}
        </h3>
        <img src={imageUrl} alt={`Movie cover image for ${title}`}/>

      </section>
      
      <p>
        {overview}
      </p>
      <p>
        {releaseDate}
      </p>

      <button onClick={onButtonClick} >
        {buttonText}
      </button>
    </div>
  )
  
}

export default Movie;
