import React from 'react';
import { Link } from 'react-router-dom';
import '../aside/aside.css';
import {  BsCardList } from 'react-icons/bs';
import {  FaRegListAlt } from 'react-icons/fa';
import {  MdOutlineCreate } from 'react-icons/md';


const Aside = () => {
  return (
    <div className='aside'>
      <h3 className='parrafo comentario'>Navegacion</h3>
      <div className='container-icons'>
        <BsCardList className='icons-list'/>
        <Link to="/" className='link-aside'> Lista de Peliculas</Link>
      </div>
      <div className='container-icons'>
        <FaRegListAlt className='icons-list'/>
        <Link to="/list-categoria" className='link-aside'>Lista de Categorias</Link>
      </div>
      <div className='container-icons'>
        <Link to='/add-pelicula'><button className='button'> <MdOutlineCreate /> Crear Pelicula</button> </Link>
      </div>
    </div>

  );
};

export default Aside;