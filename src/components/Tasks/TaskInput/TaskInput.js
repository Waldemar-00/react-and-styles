import React, { useState } from "react"

import Button from "../../UI/Button/Button"
import "./TaskInput.css"

const TaskInput = ({ addTaskHandler }) => {
  const [inputText, setInputText] = useState("");
  const [isValidInput, setIsValidInput] = useState(true)
  const taskInputChangeHandler = (e) => {
    setInputText(e.target.value)
  };

  const formSubmitHandler = (e) => {
    e.preventDefault()
    if (inputText.trim().length === 0) {
      setIsValidInput(false)
      setInputText('Not valid value')
      return
    }
    addTaskHandler(inputText)
    setInputText('')
    setIsValidInput(true)
  }
  function onInputFocus(e) {
    setIsValidInput(true)
    setInputText('')
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValidInput ? '' : 'invalid'}`}>
        <label>Задачи</label>
        <input
          type="text"
          value={ inputText }
          onFocus={onInputFocus}
          onChange={taskInputChangeHandler}
        />
      </div>
      <Button disabled={!isValidInput} type="submit">Добавить Задачу</Button>
    </form>
  )
}

export default TaskInput;
