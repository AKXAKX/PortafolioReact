import React from 'react';
import './contacto.css'


const Contacto = () => {
    return (
        <div>
            <section class="Contactame" id="contacto">
            <h2 class="titulo">Contactame</h2>
            
                <div class="contact_form">
                            <p>
                                
                            <label for="nombre" class="colocar" >Nombre: 
                                <input type="text" name="Aquí su nombre" class="ingreso"></input>
                            </label>
                            </p>
                            <p>
                            <label for="email" class="colocar">Correo:       
                                <input type="text" name="Aquí su nombre" class="ingreso"></input>
                            </label>
                            </p>
                            <p>
                            <label for="mensaje" class="colocar mensaje">Mensaje:
                                <input type="text" name="Aquí su nombre" class="ingreso"></input>
                            </label>                     
                            </p>
                            <a href="#" class="contactar_fin" ><p>Contactar</p></a>     
                     </div>
                      
        </section>
        </div>
    )
}
export default Contacto