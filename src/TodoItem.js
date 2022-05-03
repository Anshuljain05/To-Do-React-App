import React from "react";

const TodoItem = (props) => {
  const { id, text, completed } = props.task;
  const { handleChange } = props;
  return (
    <div className="todo-item" id={id}>
      <input
        type="checkbox"
        defaultChecked={completed}
        onChange={handleChange}
      />
      <label> {text} </label>
    </div>
  );
};

export default TodoItem;
