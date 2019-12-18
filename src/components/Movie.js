import React from 'react';

const Movie = (props) => {

  const { inventory, title, imageUrl, overview, releaseDate } = props;
  // use id from props??


  const stock = inventory || "out of stock"

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
      <p>
        {stock}
      </p>
    </div>
  )
  
}

export default Movie;
