import MoTodo from "./models/MoTodo";
import TodoController from "./controllers/TodoController";

import "./styles.css";
import React from "react";
import TodoMaker from "./components/TodoMaker";
import TodoList from "./components/TodoList";

type MyProps = {
  [key: string]: any;
};

const moTodo = new MoTodo();
const myHandler = new TodoController(moTodo);

class TodoApp extends React.Component {
  state = myHandler.stateBuilder("todo");

  constructor(props: MyProps) {
    super(props);
    myHandler.connectView(this);
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>todos</h1>
          <TodoMaker handler={myHandler} />
        </div>
        <section style={{ paddingTop: 40 }} className="main">
          <TodoList handler={myHandler} />
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>1</strong> item left
          </span>

          <button className="clear-completed">Clear completed</button>
        </footer>
      </div>
    );
  }
}

export default TodoApp;
