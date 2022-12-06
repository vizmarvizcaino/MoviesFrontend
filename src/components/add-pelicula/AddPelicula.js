import React, { useState } from 'react';
import axios from 'axios';
import '../add-pelicula/addpelicula.css';

const AddPelicula = () => {
  let options = JSON.parse(localStorage.getItem('message'));
  const API_URL = "http://localhost:4000/pelicula";
  const [movies, setMovies] = useState({
    nombre: "",
    sinopsis: "",
    ano: "",
    director: "",
    image: "",
    categoria1: "",
    categoria2: ""
  });

  const handleChange = (e) => {
    setMovies({
      ...movies,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let message = await writeResource();
      alert(message.message);
    } catch (error) {
      console.log('error aqui', error);
    }
  };

  const writeResource = async () => {
    return new Promise((resolve, reject) => {
      axios.post(API_URL, movies, {
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

  return (
    <form
      className="formulario"
    >
      <h2>Add Movies</h2>
      <div className="contenedor">
        <div className="input-contenedor">
          <i className="fas fa-envelope icon"></i>
          <input
            type="text"
            placeholder="Nombre Movie"
            name="nombre"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-envelope icon"></i>
          <input
            type="text"
            placeholder="Sinopsis"
            name="sinopsis"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-key icon"></i>
          <input
            type="text"
            placeholder="Año"
            name="ano"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-key icon"></i>
          <input
            type="text"
            placeholder="Director movie"
            name="director"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-key icon"></i>
          <input
            type="text"
            placeholder="Url movie"
            name="image"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-key icon"></i>
          <input
            type="text"
            placeholder="Categoria 1"
            name="categoria1"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-key icon"></i>
          <input
            type="text"
            placeholder="Categoria 2"
            name="categoria2"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
      </div>
      <button className="button" onClick={handleSubmit}>Add Movie</button>
    </form>
  );
};

export default AddPelicula;