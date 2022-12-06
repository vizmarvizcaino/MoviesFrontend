import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comentario from '../comentario/Comentario';
import '../pelicula/pelicula.css';
import SubmitComentario from '../comentario/SubmitComentario';

const Pelicula = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const API_URL = `https://express-service-zhot.onrender.com/${id}`;

  function getMovie() {
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

  const requestMovie = async () =>{
    const movie = await getMovie();
    setMovie(movie);
  };

  useEffect(() => {
    requestMovie();
  }, []);
  

  return (
    <>
      <div className='container-detalles'>
        <img src={movie.image} alt="" className='image-peli'/>
        <div className='content-descripcion'>
          <h2 className='parrafo'>{movie.nombre}</h2>
          <div>
            <h4 className='parrafo'>Sinopsis</h4>
            <p className='parrafo'>{movie.sinopsis}</p>
          </div>
          <p className='parrafo'>Director: {movie.director}</p>
          <div>
            <h4 className='parrafo'>Categoria</h4>
            <p className='parrafo'>{movie.categoria1}</p>
            <p className='parrafo'>{movie.categoria2}</p>
          </div>
        </div>
      </div>
      <div className='container-comentario'>
        <Comentario />
        <SubmitComentario id={id} />
      </div>
    </>
  );
};

export default Pelicula;