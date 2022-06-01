import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/statics/header/Header';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Contato from './pages/contato/Contato';
import Home from './pages/Home/Home';

export const App = () => {

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

        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/empresa" element={<Contato />} />
            <Route path="/servicos" element={<Contato />} /> */}
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}
