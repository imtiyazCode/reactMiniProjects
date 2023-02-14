import './App.css';
import { useState } from 'react';
import Task from './Components/Task';

function App() {
  const [title, setTitle] = useState('')
  const [tasks, setTasks] = useState([
    {
      title: "Follow Codeclash",
      completed: true
    },
    {
      title: "Do your workout",
      completed: true
    },
    {
      title: "Hangout with friends",
      completed: false
    }
  ]);

  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, completed: false }])
    setTitle("")
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div className="todo-container">
      <div className="header">TODO - ITEMS</div>
      <form action="addTask">
        <input type="text" name="task" value={title} onChange={handleChange} />
        <button type="submit" onClick={addTask}>Add Task</button>
      </form>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task tasks={tasks} setTasks={setTasks} task={task} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
