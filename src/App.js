import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    todoList: [],
    todo: ""
  };
  addTodo = this.addTodo.bind(this);
  handleInput = event => {
    this.setState({ todo: event.target.value });
  };
  addTodo() {
    this.setState({
      todoList: [...this.state.todoList, this.state.todo],
      todo: ""
    });
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.todo}!</h1>
        <input
          type="text"
          value={this.state.todo}
          onChange={this.handleInput}
        />
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {this.state.todoList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
