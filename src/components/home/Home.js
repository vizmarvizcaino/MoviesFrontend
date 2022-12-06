import React from 'react';
import Routes from '../../routes/Routes';
import Aside from '../aside/Aside';
import Footer from '../Footer/Footer';
import Header from '../header/Header';
import '../home/home.css';

const Home = () => {
  return (
    <>
      <Header />
      <Aside />
      <div className='home'>Home
        <Routes />
        <Footer />
      </div> 
    </>
  );
};

export default Home;