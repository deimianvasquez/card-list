import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import Card from '../component/Card.jsx'
import Error from '../component/Error.jsx'

const initialStateUser = {
    fullname: "",
    email: "",
    github: ""
}

function Home() {
    //aquí guardo todos los usuarios
    const [allUsers, setAllUsers] = useState([])

    //estado donde guardo mi usuario actual
    const [user, setUser] = useState(initialStateUser)

    //estado para manejar los errores de los campos del formulario
    const [error, setError] = useState(false)

    //destructuración
    const { fullname, email, github } = user

    //funcion que toma los datos del input
    const handleChange = ({ target }) => {

        setUser({
            ...user,
            [target.name]: target.value
        })
    }

    //guarda el usuario en allUsers
    const handleSubmit = (event) => {
        event.preventDefault()
        //verificar si los campos estan completos
        if (fullname.trim() != "" && email.trim() != "" && github.trim()) {
            setAllUsers([...allUsers, user])
            setUser(initialStateUser)
            setError(false)
            confetti()
        } else {
            //no tiene nada lanzo error
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
    }


    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-7">
                        <h1 className='mb-3'>Registro de usuarios</h1>
                        {/* mapeamos el estado allUsers */}
                        {
                            allUsers.map((item, index) => {
                                return (
                                    <Card key={index} item={item} />
                                )
                            })
                        }
                        {/* si tenemos errores de campos vacíos en el form */}
                        {
                            error && <Error error="Todos los campos son obligatorio" />

                        }
                        <form
                            className='border border-secondary p-3 mt-3'
                            onSubmit={handleSubmit}
                        >
                            <h2 className='text-center'>Ingresa los datos</h2>

                            <div className='form-group'>
                                <label htmlFor='fullname'>Nombre Completo</label>
                                <input
                                    id="fullname"
                                    className='form-control'
                                    onChange={handleChange}
                                    name="fullname"
                                    value={fullname}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>Correo</label>
                                <input
                                    id='email'
                                    className='form-control'
                                    onChange={handleChange}
                                    name="email"
                                    value={email}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='github'>Github</label>
                                <input
                                    id='github'
                                    className='form-control'
                                    onChange={handleChange}
                                    name="github"
                                    value={github}
                                />
                            </div>
                            <div className='my-3'>
                                <button type='submit' className='btn btn-primary w-100'>Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home


/*

let names = {
    name:"deimian",
    age:20
}

""

names.age = 55


*/