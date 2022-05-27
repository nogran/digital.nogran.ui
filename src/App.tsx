import React, { useEffect, useState } from 'react';
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
    <div>
      <Navbar acao={ativaCor} />
      <Swiper />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
