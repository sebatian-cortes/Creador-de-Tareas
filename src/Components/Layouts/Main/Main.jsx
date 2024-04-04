import { useContext, useState, useEffect } from 'react'
import '../Main/Main.css'

import { Filter } from '../../Filter/Filter'
import { Task } from '../../Tasks/Task'
import { ItemTask } from '../../ItemTask/ItemTask'
import { taskContext } from '../../Context/Context'
import {v4 as uuidv4} from 'uuid'

export const Main = () => {

  const context = useContext(taskContext)

  const [titleTask, setTitleTask] = useState('')
  const [descriptionTask, setDescriptionTask] = useState('')

  const handleTask = (event) => {
    event.preventDefault()
    const newTask = {
      id: uuidv4(),
      title: titleTask,
      description: descriptionTask,
      state: false
    }
    
    let listTask = [...context.tasks, newTask]
    context.setTasks(listTask)
    context.setFilteredTask(listTask)

  }

  useEffect(() => {

    let pending = context.tasks.filter(tasks => tasks.state === false)
    let resolved = context.tasks.filter(tasks => tasks.state === !false)

    context.setPending(pending.length)
    context.setResolved(resolved.length)
  }, [context.tasks])

  


  return (
    <main>
      <div className='inputs'>
        <div className='input'>
          <h5>titulo tarea:</h5>
          <input onChange={event => setTitleTask(event.target.value)} type="text" id='title' />
        </div>
        <div className='input'>
          <h5>Descrpcion Tarea:</h5>
          <input onChange={event => setDescriptionTask(event.target.value)} type="text" />
        </div>
        <button type="button" onClick={handleTask}>Crear</button>
      </div>
      <div className='recordatorio'>
        <h2>Usted tiene {context.resolved} tareas completadas y tareas {context.pending} pendientes</h2>
        <hr />
      </div>
      <Filter />
      <Task>
        {
          context.filteredTask.map((task, index) => <ItemTask key={task.title + index} idTask={task.id} title={task.title} content={task.description} />)
        }
      </Task>
    </main>
  )
}
