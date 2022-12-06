import React,{ useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import '../login/login.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUsers } from '../../features/user/userSlice';

const Login = () => {
  const [message, setMessage] = useState("");
  const [userBtn, setUserBtn] = useState(false);
  const API_URL = "http://localhost:4000/auth/login";
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  console.log(data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange1 = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    if (
      data.email.length === 3 &&
      data.password.length >= 5
    ) 
    {
      setUserBtn(true);
    }
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const message = await writeResource();
    console.log(message.user);
    dispatch(
      addUsers({
        ...data
      })
    );
   
    setMessage(message);
    localStorage.setItem('message', JSON.stringify(message.user));
    alert(message.user.message);
    if(message){
      return navigate("/");
    }
  };

  const writeResource = async ()  => {
    return new Promise((resolve, reject) => {
      axios.post(API_URL, data)
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
    <>
      <form className="formulario" onSubmit={handleSubmit1}> 
        <h2>Login</h2>
        <div className="contenedor">    
          <div className="input-contenedor">
            <i className="fas fa-envelope icon"></i>
            <input 
              type="text" 
              placeholder="Correo Electronico" 
              name="email"
              className='input' 
              onChange={handleChange1}/>
          </div>
          <div className="input-contenedor">
            <i className="fas fa-key icon"></i>
            <input 
              type="password" 
              placeholder="Contraseña" 
              name="password"
              className='input' 
              onChange={handleChange1}/>
          </div>
          <button className="button">Login</button>
          <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
          <p>¿No tienes una cuenta? <Link to="/registrarse" className='link'>Registrarse</Link></p>
        </div>
      </form>
    </>
  );
};

export default Login;