import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);
  const taskNameRef = useRef('');
  const taskDescriptionRef = useRef('');

  const createTask = () => {
    const taskName = taskNameRef.current.value.trim();
    const taskDescription = taskDescriptionRef.current.value.trim();
    if (taskName !== '' && taskDescription !== '') {
      const newTask = {
        id: tasks.length + 1,
        name: taskName,
        description: taskDescription,
        archived: false
      };
      setTasks([...tasks, newTask]);
      taskNameRef.current.value = '';
      taskDescriptionRef.current.value = '';
    }
  };

  const archiveTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, archived: true } : task
    );
    const archivedTask = updatedTasks.find(task => task.id === taskId);
    setArchivedTasks([...archivedTasks, archivedTask]);
    setTasks(updatedTasks.filter(task => task.id !== taskId));
  };

  const clearArchivedTasks = () => {
    setArchivedTasks([]);
  };

  return (
    <div className="App">
      <div className="tasks-container">
        <div className="task-box">
          <h2>Tareas Pendientes</h2>
          {tasks.map(task => (
            !task.archived &&
            <div key={task.id} className="task">
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <button onClick={() => archiveTask(task.id)}>Archivar</button>
            </div>
          ))}
        </div>
        <div className="archive-box">
          <h2>Tareas Archivadas</h2>
          {archivedTasks.map(task => (
            <div key={task.id} className="task">
              <h3>{task.name}</h3>
              <p>{task.description}</p>
            </div>
          ))}
          {archivedTasks.length > 0 && (
            <button onClick={clearArchivedTasks}>Borrar Tareas Archivadas</button>
          )}
        </div>
      </div>
      <div className="task-input">
        <input ref={taskNameRef} type="text" placeholder="Tarea" />
        <textarea ref={taskDescriptionRef} placeholder="Descripcion"></textarea>
        <button onClick={createTask}>Crear Tarea</button>
      </div>
    </div>
  );
}

export default App;
