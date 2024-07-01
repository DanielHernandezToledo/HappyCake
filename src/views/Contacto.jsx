import React from 'react'

export default function Contacto() {
  return (
    <div
        className='container mt-5 text-center'
    >
        <h1>Cuentanos, ¿En que te podemos ayudar?</h1>

        <form
            className='d-flex flex-column'
        >
            <label htmlFor="email" className='text-center h5'>Correo:</label>
            <input type="email" name="email" id="email" className='form-control'/>
            <br />
            <label htmlFor="message" className='text-center h5'>Descripción:</label>
            <textarea name="message" id="message" className='form-control'></textarea>
            <br />
            <div className="">
            <button
                type="submit"
                className='btn btn-danger rounded w-'
            >Enviar</button>
            </div>
        </form>
    </div>
  )
}
