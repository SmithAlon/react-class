import './App.css'
import { Cabecera } from './assets/components/cabecera.jsx'

function App() {
  return (
    <>
      <Cabecera />

    <section className="seccionPrincipal">

        <div className="divPrincipal">
            <div className="contenidoPrincipal">
                <h2 className="tituloSeccion">
                    Dando vida a ideas poderosas que conectan
                </h2>
                <p className="parrafoPrincipal">
                    Innovación, Estrategia y Creatividad: Forjamos juntos la esencia que hará que &apos;tu marca&apos; destaque y perdure.
                </p>
        
                <div className="btnContenedor">
                    <a className="btn-ver" href="#">Ver portafolio</a>
                    <a className="btn-contacto" href="#">Contacto</a>
                </div>
            </div>
    
            <div className="seccionPrincipalImg">
                <img className="imagenC" src="\src\assets\sadsad.png" alt="imagen principal" />
            </div>
        </div>

    </section>
    <footer>
    </footer>
    </>
  )
}

export default App
