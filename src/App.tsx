import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/statics/header/Header';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Swiper from './pages/swiperReact/SwiperReact';
import Home from './pages/Home/Home';
import './App.css';

function App() {

  const [ativaCor, setAtivaCor] = useState(false);

  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 40) {
        setAtivaCor(true);
      } else {
        setAtivaCor(false);
      }
    }

    window.addEventListener('scroll', posicaoScroll);
  }, []);

  return (
    <>
      <Router>
        <Navbar acao={ativaCor} />
        <Swiper />
        <Routes> // Antigo Switch

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
