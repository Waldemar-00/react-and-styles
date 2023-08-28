import React, { useState } from "react"
import TaskList from "./components/Tasks/TaskList/TaskList"
import TaskInput from "./components/Tasks/TaskInput/TaskInput"
import "./App.css"
import {v4} from 'uuid'

const App = () => {
  const [tasks, setTasks] = useState([
    { text: "Создание курса - 1 час", id: v4() },
    { text: "Разминка 15 мин", id: v4() },
    { text: "Создание курса - 1 час", id: v4() },
  ]);

  const addTaskHandler = (inputText) => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks]
      updatedTasks.unshift({ text: inputText, id: v4() })
      return updatedTasks
    });
  };

  const deleteTaskHandler = (taskId) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== taskId)
      return updatedTasks
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>Задач не найдено! Добавить?</p>
  );

  if (tasks.length > 0) {
    content = <TaskList tasks={tasks} deleteTaskHandler={deleteTaskHandler} />;
  }

  return (
    <div>
      <section id="task-form">
        <TaskInput onAddTask={addTaskHandler} />
      </section>
      <section id="tasks">{content}</section>
    </div>
  );
};

export default App;
