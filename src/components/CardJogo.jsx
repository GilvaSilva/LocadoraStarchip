import './CardJogo.css'

const CardJogo = ({img, title, launch, genre, age}) => {
    return (
        <div class='card'>
            <div>
                <img src={img}/>
            </div>
            <h2>{title}</h2>
            <div id="info">
                <p>lançado: {launch}</p>
                <p>Genero: {genre}</p>
            </div>
            <button>Alugar</button>
        </div>
    )
}

export default CardJogo 