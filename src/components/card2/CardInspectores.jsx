import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './CardInspectores.css'
import logo from 'C:\\Users\\nicoc\\OneDrive\\Escritorio\\Nueva carpeta\\Identificacion-Inspectores\\public\\LogoDim2.jpeg'
import muni from 'C:\\Users\\nicoc\\OneDrive\\Escritorio\\Nueva carpeta\\Identificacion-Inspectores\\public\\LogoDim-1.jpeg'
import perfil from '../../assets/img1.webp'
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
                    <img src={logo} alt="imagen perfil " className='logo2' />
                </div>
                <div>
                    <img src={muni} alt="" className='muni2' />
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card2'>
                    <div className='image-content'>
                        <span className='overlay'></span>
                        <div className='card-image'>
                            <img src={perfil} alt="" className={`card-img ${dataAgente != null && dataAgente.activo == 1 ? '' : 'false'}`} />
                        </div>
                    </div>
                    <div className='card-content'>
                        <p>Nombre: <strong>{(dataAgente != null && dataAgente.nombreCompleto)}</strong></p>
                        <p>DNI: <strong>{(dataAgente != null && dataAgente.documento)}</strong></p>
                        <p>Afiliado: <strong>{(dataAgente != null && dataAgente.numeroAfiliado)}</strong></p>
                        <p>Oficina: <strong>{(dataAgente != null && dataAgente.oficina)} </strong></p>
                        <p>Funcion: <strong>{(dataAgente != null && dataAgente.funcion)}</strong></p>
                        {/* <p>Tarea: <strong> {(dataAgente != null && dataAgente.tarea)} </strong></p> */}
                    </div>
                </div>
            </div>
            <hr />
            <div className='Funciones'>
                <div>
                    <p><strong>Informacion Adicional </strong>- No Registra</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CardInspectores