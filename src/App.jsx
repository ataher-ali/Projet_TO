import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Components/Global/Header/Nav';
import Footer from './Components/Global/Footer/Footer';
import BackToTop from './Components/Global/BackToTop/BackToTop';



const App = () => {
  return (
    <>
    <Nav></Nav>
      <Outlet></Outlet>
    <Footer></Footer>
    <BackToTop/>
    </>
  );
};

export default App;