import './Footer.css'
import dim from '../../../public/Dim.png'
import muni from '../../../public/Logo-Muni2.png'

function Footer() {
    return (
        <div>
            <footer className='footer-app'>
                <div className="logo-dim">
                    <img src={muni} alt="" />
                    <p>
                        Municipalidad de San Miguel de Tucuman
                    </p>
                </div>

                {/* <img className='logo-municipalidad' src={muni} alt="" /> */}

                <div className="social">
                    {/* <h3>Contactos</h3> */}
                    <div className='conteiner-info'>
                        <h4>Email</h4>
                        <p>dimsistemas@smt.gob.ar</p>
                    </div>
                    <div className='conteiner-info'>
                        <h4>Telefono</h4>
                        <p>213123123</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer