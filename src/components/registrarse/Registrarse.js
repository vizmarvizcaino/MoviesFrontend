import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUsers } from '../../features/user/userSlice';
import axios from 'axios';

const Registrarse = () => {
  const [message, setMessage] = useState("");
  console.log(message);
  const [userBtn, setUserBtn] = useState(false);
  const API_URL = "http://localhost:4000/auth/register";
  const [user, setUser] = useState({
    nombres: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    if (
      user.nombres.length >= 3 &&
      user.email.length === 3 &&
      user.password.length >= 5
    ) 
    {
      setUserBtn(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = await writeResource();
    dispatch(
      addUsers({
        ...user
      })
    );
    if(userBtn){
      writeResource();
    }
    setMessage(message);
    alert(message.message);
    if(message){
      return navigate("/login");
    }
  };

  const writeResource = async ()  => {
    return new Promise((resolve, reject) => {
      axios.post(API_URL, user)
        .then((response) => {
        // handle success
          console.log('aca', response.data);
          resolve(response.data);
        })
        .then(error => {
          reject(error);
        });
    });
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}> 
      <h2>Registrarse</h2>
      <div className="contenedor">  
        <div className="input-contenedor">
          <i className="fas fa-envelope icon"></i>
          <input 
            type="text" 
            placeholder="Nombre Usuario"
            name="nombres"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>  
        <div className="input-contenedor">
          <i className="fas fa-envelope icon"></i>
          <input 
            type="text" 
            placeholder="Correo Electronico"
            name="email"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-key icon"></i>
          <input 
            type="password" 
            placeholder="Contraseña"
            name="password"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <button className="button">Registrarse</button>
        <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
        <p>¿Ya tienes una cuenta? <Link to="/login" className='link'>Login</Link></p>
      </div>
    </form>
  );
};

export default Registrarse;