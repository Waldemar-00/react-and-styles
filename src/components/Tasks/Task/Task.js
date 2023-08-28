import React from "react";

import "./Task.css";

const Task = ({ deleteTaskHandler, children, id  }) => {
  // const [deleteText, setDeleteText] = useState('');
  return (
    <li className="task-item" onClick={() => deleteTaskHandler(id)}>
      { children }
    </li>
  );
};

export default Task;
