import React, {useContext } from 'react'
import '../ItemTask/ItemTask.css'
import { taskContext } from '../Context/Context'


export const ItemTask = ({idTask, title,content}) => {
  const {tasks, updateTaskStatus} = useContext(taskContext)
  
const task = tasks.find(task => task.id === idTask)

  const statesCheckbox =()=>{
    updateTaskStatus(idTask, !task.state)  
  }

  return (
    <div className='item'>
    <div className='box'>
    <div className={task.state ? 'green':'orange'} ></div>
    <li id={idTask}><p className={task.state ? 'line':''}><span>{title}</span>{content}</p></li>
    </div>
    <input type="checkbox" checked={task.state} onChange={statesCheckbox}/>
    </div>
  )
}
