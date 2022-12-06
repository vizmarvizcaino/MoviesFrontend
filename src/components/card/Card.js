import React from 'react';
import { Link } from 'react-router-dom';
import '../card/card.css';
import uuid from 'react-uuid';

const Card = ({ nombre, ano, id, image, key }) => {
  console.log(uuid())
  return (
    <div className="main" key={key}>
      <div className="container-cards">
        <div className="card">
          <div className="card-image">
            <Link to={`/pelicula/${id}`}>
              <img src={image} alt="fondo" className='card-image--background' />
              <img src={image} alt="logo" className='card-image--icon' />
            </Link>
          </div>
          <div className="card-content">
            <h3 className='card-text'>{nombre}</h3>
            <p className='card-text'>Año: {ano}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;