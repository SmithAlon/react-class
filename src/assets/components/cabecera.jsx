import './components.css';

function holaMundo() {
    alert("Hola Mundo");
}

export function Cabecera() {
    return (
        <header className="encabezado">
            <img className="logo" src="\src\assets\logo.png" alt="Logo"/>
            <nav>
                <a className="navegacion" href="/">Inicio</a>
                <button className="navegacion" onClick={holaMundo}>Proyectos</button>
                <a className="navegacion" href="#">Servicios</a>
                <a className="contacto" href="#" onClick={holaMundo}>contacto</a>
            </nav>
            <button className="menu-btn">=</button>
        </header>
    )
}

export default Cabecera;