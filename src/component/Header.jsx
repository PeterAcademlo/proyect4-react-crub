import React from 'react'
import '../styles/header.css'

export const Header = ({setFormOpen}) => {

    const handleOpen = () => {
        setFormOpen(true)
    }

  return (
    <header className='header'>
        <article>
        <h1>Usuarios</h1>
        <button onClick={handleOpen}>
           <span>+</span> Crear nuevo usuario
        </button>
        </article>
    </header>
  )
}
