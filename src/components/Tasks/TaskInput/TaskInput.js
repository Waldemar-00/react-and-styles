import React, { useState } from "react"
import Button from "../../UI/Button/Button"
// import ControlInput from './ControlInput'
import styles from "./TaskInput.module.css"

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
      <div className={`${styles['form-control']} ${isValidInput ? '' : styles['invalid']}`}>
      {/* <ControlInput className={isValidInput ? '' : 'invalid'}> */}
      {/* <ControlInput isvalidinput={isValidInput}> */}
        <label>Задачи</label>
        <input
          type="text"
          value={ inputText }
          onFocus={onInputFocus}
          onChange={taskInputChangeHandler}
        />
      {/* </ControlInput> */}
      </div>
      <Button disabled={!isValidInput} type="submit">Добавить Задачу</Button>
    </form>
  )
}

export default TaskInput;
