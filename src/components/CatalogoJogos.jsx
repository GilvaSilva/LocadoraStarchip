import Cabecalho from "./Cabecalho";
import CardJogo from "./CardJogo";
import React, { useState } from "react";
import './CatalogoJogos.css';
import { IoMdSearch } from "react-icons/io";

const Catalogo = () => {
    const GameGenre = ['Mundo Aberto', 'Corrida', 'RPG', 'Anime', 'Luta', 'Tiro', 'Terror'];

    const jogos = [
        { img: '/img/gta 5.jpeg', title: "Grand Theft Auto 5", launch: '01/02/2025', genre: GameGenre[0] },
        { img: '/img/Forza Horizon 5.avif', title: "Forza Horizon 5", launch: '01/02/2025', genre: GameGenre[1] },
        { img: '/img/The Crew Motorfest.jpeg', title: "The Crew Motorfest", launch: '01/02/2025', genre: GameGenre[1] },
        { img: '/img/Persona 5.jpeg', title: "Persona 5", launch: '01/02/2025', genre: GameGenre[2] },
        { img: '/img/Tekken 8.avif', title: "Tekken 8", launch: '01/02/2025', genre: GameGenre[4] },
        { img: '/img/hollow knight.avif', title: "Hollow Knight", launch: '01/02/2025', genre: GameGenre[2] },
        { img: '/img/Halo 5.webp', title: "Halo 5", launch: '01/02/2025', genre: GameGenre[5] },
        { img: '/img/Doom.avif', title: "Doom", launch: '01/02/2025', genre: GameGenre[5] },
        { img: '/img/need for speed unbound.webp', title: "Need For Speed Unbound", launch: '01/02/2025', genre: GameGenre[1] },
        { img: '/img/dying light 2.jpeg', title: "Dying Light 2 - Stay Human", launch: '01/02/2025', genre: GameGenre[6] },
        { img: '/img/dead island 2.jpeg', title: "Dead Island 2", launch: '01/02/2025', genre: GameGenre[6] },
        { img: '/img/alan wake 2.jpeg', title: "Alan Wake 2", launch: '01/02/2025', genre: GameGenre[6] },
        { img: '/img/outlast trials.avif', title: "Outlast Trials", launch: '01/02/2025', genre: GameGenre[6] },
        { img: '/img/Call of duty Coldwar.avif', title: "Call of Duty Cold War", launch: '01/02/2025', genre: GameGenre[5] },
        { img: '/img/batman arkham knight.webp', title: "Batman Arkham Knight", launch: '01/02/2025', genre: GameGenre[0] },
        { img: '/img/Super Smash Ultimate.avif', title: "Super Smash Bros Ultimate", launch: '01/02/2025', genre: GameGenre[4] },
        { img: '/img/FINAL FANTASY VII.jpeg', title: "FINAL FANTASY VII", launch: '01/02/2025', genre: GameGenre[0] },
        { img: '/img/infamous second son.webp', title: "Infamous Second Son", launch: '01/02/2025', genre: GameGenre[0] },


    ];

    // Estados para filtro de pesquisa e gênero
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");

    // Filtrar jogos com base no termo de pesquisa e gênero selecionado
    const filteredJogos = jogos.filter(jogo => {
        const matchesSearch = jogo.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGenre = selectedGenre ? jogo.genre === selectedGenre : true;
        return matchesSearch && matchesGenre;
    });

    return (
        <div>
            <Cabecalho />
            <div className="filtro">
                <form>
                    <div className="search-icon">
                        <IoMdSearch />
                    </div>
                    <input
                        type="text"
                        placeholder="Pesquisar jogos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </form>
                <form>
                    <select
                        value={selectedGenre}
                        onChange={(e) => setSelectedGenre(e.target.value)}
                    >
                        <option value="">Todos os gêneros</option>
                        {GameGenre.map((genre, index) => (
                            <option key={index} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                </form>
            </div>
            <div className="catalogo">
                {filteredJogos.map((jogo, index) => (
                    <CardJogo
                        key={index}
                        img={jogo.img}
                        title={jogo.title}
                        launch={jogo.launch}
                        genre={jogo.genre}
                    />
                ))}
            </div>
        </div>
    );
};

export default Catalogo;