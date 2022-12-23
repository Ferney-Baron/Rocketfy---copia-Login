import React from 'react'
import logo from '../img/logo3.png'

export default function LoginApp() {
    return (
        <>
            <div className='logo'>
                <img
                    src={logo}
                    alt="Logo_Rocketfy"
                />
                <h2>¡Bieeenvenido tripulante!</h2>
            </div>
            
            <div className='signup-create'>
                <p>Vamos a <span>crear tu <span> tienda en línea </span> </span></p>

                <p>Antes que nada,<span> ¿cúal es tu nombre?</span></p>
            </div>

            <div className='form'>
                <form>
                    <div className='inputs'>
                        <label htmlFor="nombre">Escribe tu nombre</label>
                        <input
                            type="text"
                            id='nombre'
                            name='nombre'
                            placeholder='Fulanito'
                        />
                    </div>
                    <div className='inputs'>
                        <label htmlFor="apellido">Escribe tu apellido</label>
                        <input
                            type="apellido"
                            id='apellido'
                            name='apellido'
                            placeholder='Fulanito'
                        />
                    </div>

                    <button type='submit'>Entrar</button>
                </form>
            </div>

            

        </>
    )
}
