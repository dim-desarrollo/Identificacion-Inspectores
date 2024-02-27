import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './CardInspectores.css'
import logo from '../../../public/LogoDim3.png'
import muni from '../../../public/LogoDim-1.jpeg'
import perfil from '../../assets/img1.webp'
import { getAgenteById, getAgenteByNum } from '../../services/servicesAgentes'
import Footer from '../footer/Footer'

function CardInspectores() {

    const [dataAgente, setDataAgente] = useState(null)
    const { numeroAfiliado } = useParams()


    useEffect(() => {
        console.log(numeroAfiliado)
        cargarAgente()
    }, [])

    function cargarAgente() {
        getAgenteById(numeroAfiliado).then(res => setDataAgente(res))
        console.log(dataAgente)
    }


    return (
        <div className='Contenedor'>
            <div className="cont-logos2">
                <div>
                    <img src={logo} alt="imagen perfil " className='logo2' />
                </div>
                <div>
                    <p>
                        <strong>Direccion de Ingresos Municipales</strong>
                    </p>
                    {/* <img src={muni} alt="" className='muni2' /> */}
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card2'>
                    <div className='image-content'>
                        <span className='overlay'></span>
                        <div className='card-image'>
                            {
                                //(dataAgente !== null && dataAgente.urlImagen !== null) ?
                                //<img
                                // src={'http://dimsmt.gob.ar:3010' + dataAgente.urlImagen}
                                //src={'http://172.20.255.15:3010' + dataAgente.urlImagen}
                                //className={`card-img ${dataAgente != null && dataAgente.activo == 1 ? '' : 'false'}`}
                                //alt="imagen perfil"
                                ///>
                                //:
                                <>
                                    <img
                                        src={perfil}
                                        alt=""
                                        className={`card-img1 ${dataAgente != null && dataAgente.activo == 1 ? '' : 'false'}`}
                                    />
                                    <img
                                        src={perfil}
                                        alt=""
                                        className={`card-img ${dataAgente != null && dataAgente.activo == 1 ? '' : 'false'}`}
                                    />
                                </>
                            }
                        </div>
                    </div>
                    <div className='card-content2'>
                        <p className={`function ${dataAgente != null && dataAgente.activo == 'JEFE DE INSPECTORES' ? 'jefe' : ''}`}><strong>Inspector{(dataAgente != null && dataAgente.funcion)}</strong></p>
                        <p>Nombre: <strong>{(dataAgente != null && dataAgente.nombreCompleto)}</strong></p>
                        <p>DNI: <strong>{(dataAgente != null && dataAgente.documento)}</strong></p>
                        <p>Nro de Afiliado: <strong>{(dataAgente != null && dataAgente.numeroAfiliado)}</strong></p>
                        <p className='advertencia'>Esta credencial es de uso personal e instransferible. En caso de encontrarla, por favor. Comuniquese al numero <strong>(381) 4524670 int 6122</strong> </p>
                        {/* <p>Tarea: <strong> {(dataAgente != null && dataAgente.tarea)} </strong></p> */}
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