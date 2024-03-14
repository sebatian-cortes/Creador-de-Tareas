import React from 'react'
import logo from '../../../assets/react.jpeg'
import '../Header/Header.css'

export const Header = () => {
  return (
    <header>
        <h1>Lista de Tareas</h1>
        <div>
        <img src={logo} alt="Logo React" />
        </div>
    </header>
  )
}
