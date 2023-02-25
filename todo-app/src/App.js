import './App.css';
import { useState, useEffect } from 'react';
import Task from './Components/Task';
import Switch from "react-switch";
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs'

function App() {

  const [todo, setTodo] = useState({ completed: false, title: "", description: "" })
  const [dark, setDark] = useState(true);
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    let myTodo = localStorage.getItem('myTodoTasks');
    if(myTodo){
      setTasks(JSON.parse(myTodo))
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title) {
      let newTask = { ...todo }
      let newTasks = [...tasks, newTask]
      setTasks(newTasks)
      setTodo({ title: '', description: '', completed: false })
      localStorage.setItem("myTodoTasks", JSON.stringify(newTasks));
    }
  }
  
  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value })
  }

  return (
    <div className={`${dark ? 'darkMode-App' : "lightMode-App"} App`}>
      <h1 className='app-title'>ToDo App</h1>
      <Switch
        checked={dark}
        onChange={() => setDark(!dark)}
        uncheckedIcon={<div className='check-sun-btn' ><BsSunFill size={18} /></div>}
        checkedIcon={<div className='check-moon-btn'><BsFillMoonStarsFill size={18} /></div>} />

      <form className='input-form' action='handleSubmit' onSubmit={handleSubmit}>
        <input className='task-input task-input-title' 
              name='title' type="text" placeholder='Enter Title' 
              onChange={handleChange} value={todo.title} />
        <input className='task-input task-input-desc' 
              name='description' type="text" placeholder='Enter Description' 
              onChange={handleChange} value={todo.description} />
        <button className={`task-btn ${dark ? 'darkMode-add-btn' : 'lightMode-add-btn'} add-btn`} 
              type='submit'>Add</button>
      </form >

      <div className={`${dark ? 'darkMode-box-tasks-container' : "lightMode-box-tasks-container"} box-tasks-container`}>
        {tasks?.map((task, i) => {    
          return <Task task={task} tasks={tasks} setTasks={setTasks} index={i} dark={dark} key={i} />
        })}
      </div>
    </div >
  );
}

export default App;
