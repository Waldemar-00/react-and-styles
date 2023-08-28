import React from "react";

import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({ tasks, deleteTaskHandler }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} id={task.id} deleteTaskHandler={deleteTaskHandler}>
          {task.text}
        </Task>
      ))}
    </ul>
  );
};

export default TaskList;
