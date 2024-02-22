import './InsertImg.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { postInsertImg } from '../../services/servicesAgentes'

function InsertImg() {

    const [imagen, setImagen] = useState(null);
    const [isValid, setIsValid] = useState(false)
    const { numeroAfiliado } = useParams();

    const InserImg = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImagen(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    function InsertImg() {
        postInsertImg(numeroAfiliado, imagen)
            .then(res => {
                if (res != null && res.status != null) {
                    setIsValid(true)
                }
                console.log(res)
            })
    }

    return (
        <>
            <form className='FormImg'>
                <label htmlFor="">Insertar Imagen para el inspector: {numeroAfiliado} </label>
                <input type="file" onChange={(e) => setImagen(e.target.files[0])} accept="image/*" />
                {/* {
                imagen && 
                setTimeout(() => {
                    <img src={imagen} alt="Imagen mostrada" />
                }, 1000)
            } */}
                <button
                    type='button'
                    onClick={InsertImg}
                    className='btn-Añadir'
                >
                    Añadir
                </button>

            </form>
            {
                isValid != false ?
                    <div>
                        <h2>Subido con exito</h2>
                    </div>
                    :
                    ""
            }
        </>
    );
}

export default InsertImg
