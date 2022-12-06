import React, { useState } from 'react';
import axios from 'axios';
import './submitcomentario.css';


const SubmitComentario = ({ id }) => {
  let options = JSON.parse(localStorage.getItem('message'));
  let users = options.nombres || " ";
  const API_URL = "http://localhost:4000/comentario";
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    contenido: "",
    id,
    user: users
  });

  const handleChange2 = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      const message = await writeResource();
      setMessage(message);
      alert(message.message);
    } catch (error) {
      setError(true);
    }
  };
  
  const writeResource = async ()  => {
    return new Promise((resolve, reject) => {
      axios.post(API_URL, user, {
        headers: {
          Authorization: 'Bearer ' + options.accessToken 
        }
      })
        .then((response) => {
          // handle success
          resolve(response.data);
        })
        .then(error => {
          reject(error);
        });
    });
  };

  const handleComentario = () => {
    setBtn(true);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit2}>
        {btn ? (
          <input 
            type="text" 
            placeholder='add comentarios' 
            name='contenido'
            onChange={handleChange2} className='input-header'/>
        ):(
          <button onClick={handleComentario} className="buttons">Deja tu comentario</button>
        )
        }
        {error ?(
          <p className='parrafo-comentario-error'>No tienes acceso, debes estar logueado</p>
        ):(
          ""
        )
        }
      </form>
    </div>
  );
};

export default SubmitComentario;