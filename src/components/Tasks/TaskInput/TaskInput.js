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
  const labelStyle = isValidInput ? 'black' : '#FFC9C9'
  const inputStyle = isValidInput ?
    { backgroundColor: '#c8e1e4', borderColor: '#c8e1e4', fontStyle: 'normal', color: 'black' } :
    { backgroundColor: '#FFC9C9', borderColor: '#FFC9C9', fontStyle: 'italic', color: 'red' }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: labelStyle }}>Задачи</label>
        <input
          type="text"
          value={inputText}
          onFocus={onInputFocus}
          onChange={taskInputChangeHandler}
          style={ inputStyle }
        />
      </div>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  )
}

export default TaskInput;
