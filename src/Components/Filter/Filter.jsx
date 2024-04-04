
import '../Filter/Filter.css'
import React, {useContext } from 'react'

import { taskContext } from '../Context/Context'

export const Filter = () => {

  const context = useContext(taskContext)

  const handleFilters = (event) => {
    let currentOption = event.target.value

    if (currentOption==='Pendientes') {
      context.setFilteredTask(context.tasks.filter(task => !task.state))
    } else if(currentOption==='Resueltas') {
      context.setFilteredTask(context.tasks.filter(task => task.state))
    }else{
      context.setFilteredTask(context.tasks)
      
    }
  }

  return (
    <div className='filter'>
    <h2>Filtrar:</h2>
    <select name="Tareas" id="select" onChange={handleFilters}>
        <option value="Todas">Todas Las Tareas</option>
        <option value="Pendientes">Pendientes</option>
        <option value="Resueltas">Resueltas</option>
    </select>
    </div>
  )
}
