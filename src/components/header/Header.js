import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../header/header.css';



const Header = () => {
  let options = JSON.parse(localStorage.getItem('message'));
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = async () => {
    navigate("/login");
    if (options.accessToken) {
      setUser(true);
    }
  };

  return (
    <div className='header'>
      <h1><Link to='/' className='logo'>PelisTec</Link></h1>
      {user ? (
        <p className='parrafo comentario'>Bienvenido, {options.nombres}</p>
      ) : (
        <button className='buttons-session' onClick={handleNavigate}>Iniciar Sesion</button>
      )
      }
    </div>
  );
};

export default Header;