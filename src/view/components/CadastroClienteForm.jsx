import React, { useState } from "react";
import "./CadastroClienteForm.css";

const CadastroClienteForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    nascimento: "",
    telefone: "",
    senha: "",
    confirmar: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar os dados para um backend
    console.log("Dados do cliente:", formData);
  };

  return (
    <div className="pagina-cadastro">
      <div className="form-container">
        <h2>Cadastro de Cliente</h2>
        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>
          <div className="campo">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="campo">
            <label>Data de Nascimento</label>
            <input
              type="date"
              name="nascimento"
              value={formData.nascimento}
              onChange={handleChange}
            />
          </div>
          <div className="campo">
            <label>Telefone</label>
            <input
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>
          <div className="campo">
            <label>Senha</label>
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
            />
          </div>
          <div className="campo">
            <label>Confirmar Senha</label>
            <input
              type="password"
              name="confirmar"
              value={formData.confirmar}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroClienteForm;
