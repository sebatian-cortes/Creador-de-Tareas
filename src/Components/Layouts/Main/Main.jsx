import React from 'react'
import '../Main/Main.css'
import { Filter } from '../../Filter/Filter'
import { Task } from '../../Tasks/Task'
import { ItemTask } from '../../ItemTask/ItemTask'




export const Main = () => {
  return (
    <main>
    <div className='inputs'>
        <div className='input'>
        <h5>titulo tarea:</h5>
        <input type="text" />
        </div>
        <div className='input'>
        <h5>Descrpcion Tarea:</h5>
        <input type="text" />
        </div>
        <button type="button" >Crear</button>
    </div>
    <div className='recordatorio'>
        <h2>Usted tiene 2 tareas completadas y 2 tareas pendientes</h2>
        <hr />
    </div>
    <Filter/>
    <Task>
        <ItemTask title="Hacer Lo De Rozo" content="Trabajo React"/>
        <ItemTask title="Ir A Dormir" content="ojala"/>
        <ItemTask title="Hacer Lo De Diana" content="Que pereza estudiar eso"/>
    </Task>
    </main>
  )
}
