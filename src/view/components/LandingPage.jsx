import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link para navegação
import "./LandingPage.css";

function LandingPage() {
    return (
        <main className="main-content">
            <section>
                <h1>Bem-vindo à Starchimp</h1>
                <p>Alugue os melhores jogos de videogame com a Starchimp! Oferecemos uma ampla variedade de títulos para todas as plataformas, com entrega rápida e preços acessíveis. Experimente a liberdade de jogar sem compromisso!</p>
            </section>

            {/* Botões de ação */}
            <div className="buttons-container">
                <Link to="/cadastro">
                    <button className="button-cadastrar">Cadastrar</button>
                </Link>

                <Link to="/catalogo">
                    <button className="button-catalogo">Veja nosso catálogo</button>
                </Link>
            </div>
        </main>
    );
}

export default LandingPage;