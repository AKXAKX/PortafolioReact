import React from 'react';
import './servicios.css'
import fotomant from '../../img/trabajo.jpeg';
import Tarjeta from'./tarjetas'
import {db} from '../../firebase'
function Servicio(){
    /*const [servicios, setServicios] = useState([])
    useEffect(() => {
        db.collection('servicios').onSnapshot(datos =>{
            const servis=[]
            datos.forEach(registro =>{
                console.log(registro.id,registro.data());
                servis.push({...registro.data(),id:registro.id})
                
            });
            console.log(servis)
            setServicios(servis)
        },[setServicios])*/
        

    return (
        <div>
  <section className="trabajo" id="servicios">
    <div className="contenedor">
      <div className="trabajo-cont">
        <img src={fotomant} alt="" className="imagen-about-derecha" />
        <div className="texto-izquierda"> 
          <h2 className="titulo">Servicios</h2>   
          <p>Ofrezco planificar, diseñar, mantener y crear interfaces digitales.</p>
          <p>Ayudo a facilitar la implementación de espacios publicitarios.</p>
          <p>Experiencia en desarrollo de aplicaciones para uso comercial.</p>
        </div>
      </div>
    </div>
  </section>
</div>
   
    )
    }
export default Servicio