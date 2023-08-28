import React from "react"
import "./Task.css"

const Task = ({ deleteTaskHandler, task }) => {
  return (
    <li className="task-item"
        key={task.id}
        id={task.id}
      onClick={() => deleteTaskHandler(task.id)}
    >
      { task.text }
    </li>
  )
}

export default Task
