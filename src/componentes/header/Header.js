import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <div class="enlaces" id="enlaces">
                    <a href="#contacto"class="contacto">Contacto</a>
                    <a href="#grupo"class="contacto">Acerca de</a>
                    <a href="#estudios" class="contacto">Estudios realizados</a>
                    <a href="#servicios" class="contacto">Servicios</a>
                    <a href="#portafolio" class="contacto">Portafolio</a>
                    <a href="#testimonio" class="contacto">Testimonios</a>
                    </div>
                </nav>

            <section class="texto-header">
            <h1>Hola soy Kenny Rodríguez. Estudiante.</h1>
            <h2>Futuro profesional en desarrollo de software.</h2>
            <div>
                <a href="#contacto" class="contacto1">Contacto</a>    
            </div>
            
        </section>
        <section>
        <div className="ocean">
            <div className="wave" />
            <div className="wave" />
        </div>


        </section>
        
    </header>
        </div>
    )
}
export default Header