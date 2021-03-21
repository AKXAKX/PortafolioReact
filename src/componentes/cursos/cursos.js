import React from 'react';
import './cursos.css'
import fotocert from '../../img/cursos.jpg';

const Cursos = () => {
    return (
        <section className="cursos">
        <div className="contenedor">
            <div className="cursos-cont">
            <img src={fotocert} alt="" className="imagen-about" />
            <div className="texto-izquierda"> 
                <h2 className="titulo">Cursos realizados</h2>   
                <p>Orientación a la programación.</p>
                <p>Programación en Python.</p>
                <p>Programación en JavaScript.</p>
            </div>
            </div>
        </div>
        </section>
    )
}
export default Cursos