import React from 'react';
import { Routes as Switch, Route, } from 'react-router-dom';
import Pelicula from '../components/pelicula/Pelicula';
import { PeticionApi } from '../components/card/peticiones/getResource';
import ListCategoria from '../components/list-categoria/ListCategoria';
import Login from '../components/login/Login';
import Registrarse from '../components/registrarse/Registrarse';
import AddPelicula from '../components/add-pelicula/AddPelicula';


const Routes = () => {
  return (
    <div>
      <div className="routes">
        <Switch>
          <Route exact path="/" element={<PeticionApi />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/registrarse" element={<Registrarse />} />
          <Route exact path="/pelicula/:id" element={<Pelicula />} />
          <Route exact path="/add-pelicula" element={<AddPelicula />} />
          <Route exact path="/list-categoria" element={<ListCategoria />} />
          <Route exact path="*" element={"Page Not Found"} />
        </Switch>
      </div>

    </div>
  );
};

export default Routes;