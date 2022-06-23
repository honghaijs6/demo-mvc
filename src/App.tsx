import MoTodo from "./models/MoTodo";
import TodoController from "./controllers/TodoController";
import MVCView from "./Libs/MVC/MVCView";

import "./styles.css";
import React from "react";
import TodoMaker from "./components/TodoMaker";
import TodoList from "./components/TodoList";
import Login from "./components/Login";

const moTodo = new MoTodo();
const myHandler = new TodoController(moTodo)


class TodoApp extends MVCView {

  constructor(){
    super(myHandler,moTodo)
  }

  render(): React.ReactNode { 
    
    const {state} = myHandler.MODELS.todo ;
    
    return state.userInfo ?  (
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
            <strong>{state.todos.length}</strong> item left
          </span>

          <button className="clear-completed">Clear completed</button>
        </footer>
        
      </div>
    ):<Login />;
  }
}

export default TodoApp ; 
