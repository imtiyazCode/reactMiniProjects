import React from 'react'

const Task = ({tasks, setTasks, task, index}) => {
    
    const handleComplete =(e) => {
        e.preventDefault()
        let newTasks = [...tasks]
        newTasks[index].completed = true
        setTasks(newTasks)
    }
  return (
    <>
        <h1 style={{textDecoration: task.completed ? 'line-through':''}}>{task.title}</h1>
        <button onClick={handleComplete}>Complete</button>
    </>
  )
}

export default Task