import React from 'react';
import './testimonio.css'
import fotoAna from '../../img/persona1.jpg';
import fotofer from '../../img/persona2.png';
import fotomer from '../../img/persona3.jpg';
import fotosas from '../../img/persona4.jpg';
const Testimonio = () => {
    return (
        <div>
            <section class="Que dicen de mi" id="testimonio">
            <div class="contenedor">
            <h2 class="titulo">Que dicen de mi...</h2>
            <div class="cards">
                <div class="card">
                    <img src={fotoAna} alt=""></img>
                    <div class="contenido-texto-card">
                        <h4><b>Edison Toala</b></h4>
                        <h6><i>Estudiante</i></h6>
                        <p><i>Buen editor de contenido.</i></p>
                    </div>
                </div>
                <div class="card">
                    <img src={fotofer} alt=""></img>
                    <div class="contenido-texto-card">
                        <h4><b>Ana Espinoza</b></h4>
                        <h6><i>Estudiante</i></h6>
                        <p><i>Mantiene mucha creatividad.</i></p>
                    </div>
                </div>
               <div class="card">
                    <img src={fotomer} alt=""></img>
                    <div class="contenido-texto-card">
                        <h4><b>Vladimir Vallejo</b></h4>
                        <h6><i>Profesional</i></h6>
                        <p><i>Ejerce un desarrollo sustentable.</i></p>
                    </div>
                </div>
                <div class="card">
                    <img src={fotosas} alt=""></img>
                    <div class="contenido-texto-card">
                        <h4><b>Pedro Sánchez</b></h4>
                        <h6><i>Profesional</i></h6>
                        <p><i>Cumple con todos los requerimientos de un profesional.</i></p>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </div>
    )
}
export default Testimonio