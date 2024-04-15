import React, {useState} from 'react';
import '../styles/Modal.css';

function Modal(props){
    const [isOpen, setIsOpen] = useState(false);

    // funcion flecha actualiza el estado isopen en el compnente
    const toggleModal=() => {
        // funcion realiza lo opuesto
        setIsOpen(!isOpen);
    };

    return(
        <div>
            <button onClick={toggleModal}>Abrir Modal</button>
            { isOpen && (
                <div className='modal-overlay'>
                    <div className='modal'>
                        <div className='modal-header'>
                            <h2>Modal</h2>
                        </div>
                        <div className='modal-content'>
                            <p>Informacion xxxxxxxxxxxxxxxxxxxxxxxx</p>
                            <button onClick={toggleModal}>Cerrar Modal</button>
                        </div>
                    </div>

                </div>
            )

            }
        </div>
    );
}
export default Modal;