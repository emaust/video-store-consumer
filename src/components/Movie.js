import React from 'react';

const Movie = (props) => {

  const { title, imageUrl, overview, releaseDate } = props;
  // use id from props??

  return (
    <div >
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
    </div>
  )
  
}

export default Movie;
