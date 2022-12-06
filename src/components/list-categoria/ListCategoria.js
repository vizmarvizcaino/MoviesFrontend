import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import '../list-categoria/listcategoria.css';

const ListCategoria = () => {
  const [categorias, setCategorias] = useState([]);
  const API_URL = 'https://express-service-zhot.onrender.com/categorias';
  function getCategorias() {
    return new Promise((resolve, reject) => {
      axios(API_URL)
        .then(response => {
          // handle success
          console.log(response.data)
          resolve(response.data);
        })
        .then(error => {
          reject(error);
        });
    });
  }

  const requestCategorias = async () =>{
    const categorias = await getCategorias();
    setCategorias(categorias);
  };

  useEffect(() => {
    requestCategorias();
  }, []);

  return (
    <div className='container-categorias'>
      <h2 className='categoria-titulo'>Categorias</h2>
      {
        categorias.map((categorias) => 
          <>
          <div className='container-category'>
          <h3 className='categorias-pelis' key={uuid()}>{categorias.categoria1}</h3>
          <h3 className='categorias-pelis'> {categorias.categoria2}</h3>
          </div>
          </>
        )
      }
    </div>
  );
};

export default ListCategoria;