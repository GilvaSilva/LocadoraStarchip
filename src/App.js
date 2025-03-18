import React from "react";
import CadastroClienteForm from './view/components/CadastroClienteForm';
import LoginForm from './view/components/LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecalho from './view/components/Cabecalho';
import LandingPage from "./view/components/LandingPage";
import Catalogo from "./view/components/CatalogoJogos"; // Importe o componente do catálogo
import Footer from "./view/components/Rodape"

import "./App.css"; // Se quiser adicionar algum estilo global

const App = () => {
  return (
    <Router>
      <div className="container">
        <Cabecalho />
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Rota para a página inicial */}
          <Route path="/login" element={<LoginForm />} /> {/* Rota para o login */}
          <Route path="/cadastro" element={<CadastroClienteForm />} /> {/* Rota para o cadastro */}
          <Route path="/catalogo" element={<Catalogo />} /> {/* Rota para o catálogo */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;