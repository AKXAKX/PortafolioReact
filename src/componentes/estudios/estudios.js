import React from 'react';
import './estudios.css'
import fotoestud from '../../img/studio.jpg';
import fotohabi from '../../img/habilidades.jpg';

const Estudios = () => {
    return (
        <div>
            <section class="Estudios-realizados" id="estudios">
            <div class="contenedor">
                <h2 class="titulo">Estudios realizados</h2>
                 <div class="estudio-cont">
                    <img src={fotoestud} alt="" class="imagen-about"></img>
                    <div class="estudio-ind">
                        <h3>Primaria</h3>
                        <p><span>*</span>Unidad Educativa Semillitas</p>
                        <p><span>*</span>Unidad Educativa Santa Teresita del niño Jesús</p>
                    </div>
                    <div class="estudio-ind">
                        <h3>Secundaria</h3>
                        <p><span>*</span>Unidad Educativa Santa Teresita del niño Jesús</p>
                        <p><span>*</span>Unidad Educativa Franciscana San Antonio</p>
                    </div>
                    <div class="estudio-ind">
                        <h3>Superior</h3>
                        <p><span>*</span>Universidad Estatal de Milagro</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="Habilidades">
            <div class="contenedor">
                <div class="habilidades-cont">
                <img src={fotohabi} alt="" class="imagen-about"></img>
                <div class="texto-izquierda"> 
                    <h2 class="titulo">Habilidades adquiridas</h2>   
                    <p>Conocimiento en HTML.</p>
                    <p>Conocimiento en CSS.</p>
                    <p>Creatividad en JavaScript.</p>
                    <p>Mantenimiento en PHP.</p>
                    <p>Desarrollo en MySQL.</p>
                </div>
            </div>
            </div>
        </section>
        </div>
    )
}
export default Estudios