import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import '../comentario/comentario.css';


const Comentario = () => {
  const [comentarios, setComentarios] = useState([]);
  const { id } = useParams();
  const API_URL = `http://localhost:4000/peliculas/${id}/comentarios`;

  function getComentario() {
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

  const requestComentario = async () =>{
    const comentario = await getComentario();
    setComentarios(comentario);
  };

  useEffect(() => {
    requestComentario();
  }, []);

  return (
    <div className='container-comentarios'>
      <p className='parrafo'>opiniones</p>
      {
        comentarios.map((comentario) => 
          <>
            <div  className='container-comentarios-internos' key={uuidv4()}>
            <div className='comentarios-sub'>
            <h3 className='nombre-user'>{comentario.user}</h3>
            <p className='comentario-contenido'>{comentario.contenido}</p>
            </div>
            </div>
          </>
        )
      }
    </div>
  ); 
};

export default Comentario;


