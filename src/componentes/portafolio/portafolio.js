import React from 'react';
import './portafolio.css';
import foto1 from '../../img/proyecto-1.jpg';
import foto2 from '../../img/proyecto-2.jpg';
import foto3 from '../../img/proyecto-3.jpg';
import foto4 from '../../img/proyecto-4.jpg';
import foto5 from '../../img/proyecto-5.jpg';
import foto6 from '../../img/proyecto-6.jpg';
import foto7 from '../../img/proyecto-7.jpg';
import foto8 from '../../img/proyecto-8.jpeg';
import click from '../../img/click.png';


const Portafolio = () => {
    return (
        <div>
            
            <section class="Proyecto" id="portafolio">
            <div class="contenedor">
                <h2 class="titulo">Portafolio</h2>
                <div class="galeria-pro">
                    <div class="imagen-pro">
                        <img src={foto1} alt=""></img>
                        <div class="hover-galeria">
                            <img src={click} alt="icono al momento de seleccionar"></img>
                            <p>proyecto-1</p>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src={foto2} alt=""></img>
                        <div class="hover-galeria">
                            <img src={click} alt="icono al momento de seleccionar"></img>
                            <p>proyecto-2</p>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src={foto3} alt=""></img>
                        <div class="hover-galeria">
                            <img src={click} alt="icono al momento de seleccionar"></img>
                            <p>proyecto-3</p>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src={foto4} alt=""></img>
                        <div class="hover-galeria">
                            <img src={click} alt="icono al momento de seleccionar"></img>
                            <p>proyecto-4</p>
                            <p>proyecto-4</p>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src={foto5} alt=""></img>
                        <div class="hover-galeria">
                            <img src={click} alt="icono al momento de seleccionar"></img>
                            <p>proyecto-5</p>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src={foto6} alt=""></img>
                        <div class="hover-galeria">
                            <img src={click} alt="icono al momento de seleccionar"></img>
                            <p>proyecto-6</p>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src={foto7} alt=""></img>
                        <div class="hover-galeria">
                            <img src={click} alt="icono al momento de seleccionar"></img>
                            <p>proyecto-7</p>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src={foto8} alt=""></img>
                        <div class="hover-galeria">
                            <img src={click} alt="icono al momento de seleccionar"></img>
                            <p>proyecto-8</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
            
        </div>
    )
}
export default Portafolio