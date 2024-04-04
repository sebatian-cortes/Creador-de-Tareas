import React from 'react'
import { createContext, useState } from 'react'


export const taskContext = createContext()

export const TasksProvider = ({ children }) => {

   const [tasks, setTasks] = useState([]);
   const [filteredTask, setFilteredTask] = useState(tasks)
   const [pending, setPending] = useState(0)
   const [resolved, setResolved] = useState(0)

   

   const updateTaskStatus = (taskId, newStatus) => {
      setTasks(prevTasks =>
         prevTasks.map(task =>
            task.id === taskId ? { ...task, state: newStatus } : task
         )

      );
   }


   return (
      <taskContext.Provider value={{
         tasks,
         setTasks,
         resolved,
         pending,
         setPending,
         setResolved,
         updateTaskStatus,
         filteredTask,
         setFilteredTask
      }}>
         {children}
      </taskContext.Provider>
   )
}
