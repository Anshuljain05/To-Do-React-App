import React from "react";
import "./styles.css";
import todos from "./todoData";
import TodoItem from "./TodoItem.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: todos
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState((prevState) => {
      return { completed: !prevState.completed };
    });
  }
  render() {
    const { tasks } = this.state;
    return (
      <div className="todo-list">
        <h1>My Daily Goals</h1>
        {tasks.map((task) => {
          return (
            <TodoItem
              task={task}
              handleChange={this.handleChange}
              key={task.id}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
