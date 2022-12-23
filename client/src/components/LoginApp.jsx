import React, { useState } from 'react'
import logo from '../img/logo3.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import usuario from '../../../Back_end/model/usuario'

export default function LoginApp() {

    const [ inputs, setInputs ] = useState({
        email : '',
        password : ''   
    })

    const { email, password } = inputs;

    const login = () => {
        const Usuario = {
            email,
            password
        }

        console.log(Usuario)

        axios.post('http://localhost:3000/', Usuario)
        .then(res => {
            console.log(res)
            if (res.data.solicitud) {
                console.log('Entrando...');
                navegate('/home');
            } else {
                console.log('no puede entrar');
            }
        })
           
    }
    
    const navegate = useNavigate();

    return (
        <>
            <div className='logo'>
                <img
                    src={logo}
                    alt="Logo_Rocketfy"
                />
                <h2>Iniciar sesión</h2>
            </div>
            <div className='form'>
                <form onSubmit={e => {
                    e.preventDefault()
                }}>
                    <div className='inputs'>
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            placeholder='Escribe tu correo electrónico'
                            onChange={(e) => setInputs({...inputs, [e.target.name] : e.target.value})}
                            value={email}
                            
                        />
                    </div>
                    <div className='inputs'>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id='password'
                            name='password'
                            placeholder='Digita tu contraseña'
                            onChange={(e) => setInputs({...inputs, [e.target.name] : e.target.value})}
                            value={password}
                        />
                    </div>

                    <button type='submit' onClick={login}>Entrar</button>
                </form>
            </div>

            <div className='button-create'>
                <div >
                    <button>Olvidé mi contraseña</button>
                    <button className='b' onClick={() => navegate('/signup')}>No tengo cuenta, crear una tienda</button>
                </div>

            </div>

            <div className='info'>
                <p>
                    Creemos en el poder de lo social, <br /> saldremos adelante juntos
                </p>
                <p>
                    Rocketfy Web App - V3.2.1 - 2021
                </p>
            </div>

        </>
    )
}
