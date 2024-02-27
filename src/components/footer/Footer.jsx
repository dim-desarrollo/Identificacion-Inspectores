import './Footer.css'
import dim from '../../../public/Dim.png'
import muni from '../../../public/Logo-Muni2.png'

function Footer() {
    return (
        <div>
            <footer className='footer-app'>
                <div className="logo-dim">
                    <p>
                        Municipalidad de San Miguel de Tucuman
                    </p>
                    <div className="vertical-line"></div>
                </div>

                {/* <img className='logo-municipalidad' src={muni} alt="" /> */}


                <div className="social">
                    <div>
                        <p>
                            Secretaria de <strong>Ingresos Municipales</strong>
                        </p>
                    </div>
                    <div>
                        <img src={muni} alt="" />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer