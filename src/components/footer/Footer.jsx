import './Footer.css'
import NuevoMuni from '../../../public/LOGO_MUNICIPAL_NUEVO.webp'
import muni from '../../../public/Logo-Muni2.png'

function Footer() {
    return (
        <div>
            <footer className='footer-app'>
                <div className="logo-dim">
                    <img src={NuevoMuni} alt="" />
                </div>

                {/* <img className='logo-municipalidad' src={muni} alt="" /> */}


                <div className="social">
                    
                    
                        <img src={muni} alt="" />
                    
                </div>
            </footer>
        </div>
    )
}

export default Footer