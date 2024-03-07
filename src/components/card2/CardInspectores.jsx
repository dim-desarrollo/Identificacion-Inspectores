import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './CardInspectores.css'
import logo from '../../../public/LogoDim3.png'
import DIM from '../../../public/logo_DIM.webp'
import perfil from '../../../public/Avatar2.jpg'
import { getAgenteByNum } from '../../services/servicesAgentes'
import Footer from '../footer/Footer'

function CardInspectores() {

    const [dataAgente, setDataAgente] = useState(null)
    const { numeroAfiliado } = useParams()


    useEffect(() => {
        console.log(numeroAfiliado)
        cargarAgente()
        
    }, [])

    function cargarAgente() {
        getAgenteByNum(numeroAfiliado).then(res => setDataAgente(res))
        console.log(dataAgente)
    }


    return (
        <div className='Contenedor'>
            <div className="cont-logos2">
                <div>
                    <img src={DIM} alt="imagen perfil " className='logo2' />
                </div>
                <div className="vertical-line2"></div>
                <div>
                    <h2>
                        Direccion de Ingresos Municipales
                    </h2>
                    
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card2'>
                    <div className='image-content'>
                        <span className='overlay'></span>
                        <div className='card-image'>
                            {
                                (dataAgente !== null && dataAgente.urlImagen !== null) ?
                                    <img
                                        src={'http://dimsmt.gob.ar:3010' + dataAgente.urlImagen}
                                        className={`card-img1 ${dataAgente != null && dataAgente.activo == 1 ? '' : 'false'}`}
                                        alt="imagen perfil"
                                    />
                                    :
                                    <img
                                        src={perfil}
                                        alt=""
                                        className={`card-img1 ${dataAgente != null && dataAgente.activo == 1 ? '' : 'false'}`}
                                    />
                            }
                        </div>
                    </div>
                    <div className='card-content2'>
                        
                        <p className={`function ${dataAgente != null && dataAgente.funcion == 'JEFE DE INSPECTORES' || dataAgente != null && dataAgente.funcion == 'NOTIFICADOR' ? 'jefe' : 'SinFuncion'}`}><strong>{(dataAgente != null && dataAgente.funcion)}</strong></p>
                        <p>Nombre: <strong>{(dataAgente != null && dataAgente.nombreCompleto)}</strong></p>
                        <p>DNI: <strong>{(dataAgente != null && dataAgente.documento)}</strong></p>
                        <p>Nro de Afiliado: <strong>{(dataAgente != null && dataAgente.numeroAfiliado)}</strong></p>
                        <p>Estado: <strong>{(dataAgente != null && dataAgente.activo === 1 ? 'Activo' : 'No Activo')}</strong></p>
                        <p className='advertencia'>Esta credencial es de uso personal e instransferible. En caso de encontrarla, por favor. Comuniquese al numero <strong>(381) 4524670 int 6122</strong> </p>
                        
                    </div>
                </div>
            </div>
            {/*<hr />
             
                <div className='Funciones'>
        <div>
          <p><strong>Informacion Adicional</strong></p>
           <span className='sello'>No Registra</span>
        </div>
      </div>
            
            <div className='Funciones2'>
                <div>
                    <p><strong>Informacion Adicional</strong></p>
                    <span className='sello'>No Registra</span>
                </div>
            </div>*/}
            <Footer />
        </div>
    )
}

export default CardInspectores