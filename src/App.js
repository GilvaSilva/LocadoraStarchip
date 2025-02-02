import React from "react";
import CadastroClienteForm from './components/CadastroClienteForm';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import LandingPage from "./components/LandingPage";
import Catalogo from "./components/CatalogoJogos"; // Importe o componente do catálogo

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
      </div>
    </Router>
  );
};

export default App;