import React from 'react'

export default function Home() {
  return (
    <div
        className='container mt-5 d-flex flex-column align-items-center gap-4'
    >
        <h1 className='text-center'>Bienvenido a <span className='fw-bold'>HappyCake</span></h1>
        <p className='text-center h3'>El lugar de los pasteles felices</p>
        <img src="/icons/pastel.png" alt="icono-pastel" style={{height:80+'px',width:80+'px'}}/>
    </div>
  )
}
