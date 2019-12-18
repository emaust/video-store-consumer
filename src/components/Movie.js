import React from 'react';

const Movie = (props) => {

  const { title, imageUrl, overview, releaseDate } = props;
  // use id from props??

  return (
    <div className="movie-container">
      <section>
        <h3>
          {title}
        </h3>
        <img src={imageUrl} />

      </section>
      
      <p>
        {overview}
      </p>
      <p>
        {releaseDate}
      </p>

      {/* if there's a prop that says selectable, show select button */}
      {/* if there's a propt that says add-to-library-able, show add to library button */}
    </div>
  )
  
}

export default Movie;
