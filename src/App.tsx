import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/statics/header/Header';
import Footer from './components/statics/footer/Footer';
import { Contato } from './pages/contato/Contato';
import { Home } from './pages/Home/Home';

export const App = () => {

  return (
    <>
      <Router>
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
