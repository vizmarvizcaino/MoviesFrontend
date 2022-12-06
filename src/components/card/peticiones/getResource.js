import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../Card';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export function PeticionApi() {
  const [pelicula, setPelicula] = useState([]);
  const API_URL = 'https://express-service-zhot.onrender.com/peliculas';


  function getPeliculaApi() {
    return new Promise((resolve, reject) => {
      axios(API_URL)
        .then(response => {
          // handle success
          resolve(response.data);
        })
        .then(error => {
          reject(error);
        });
    });
  }

  const requestApi = async () =>{
    const pelicula = await getPeliculaApi();
    setPelicula(pelicula);
  };

  useEffect(() => {
    requestApi();
  }, []);

  return (

    <div className="peticion">
      {
        pelicula.map(pelicula => {
          return <Card
            nombre={pelicula.nombre}
            ano={pelicula.ano}
            image={pelicula.image}
            id={pelicula.id}
            key={uuidv4()}
          />;
        })
      }
    </div>
  );
}


