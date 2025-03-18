import './Cabecalho.css'

const Cabecalho = () => {
    return (
    <header class="cabecalho">
        <nav>
            <a className="logo" href="/">Locadora Star Chimp</a>
            <ul className="navbar">
                <li><a href='/Login'>Entrar</a></li>
                <li><a href='/Cadastro'>Inscreva-se</a></li>
                <li><a href= '/Contato'> Contato</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Cabecalho

