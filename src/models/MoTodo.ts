import { MVCModel } from "../Libs/MVC";
import iTodo from "./iTodo";

interface Todo {
  
  id: number;
  title: string;
  completed: boolean;
  status?: string;
}

const NAME = 'todo';
const defineState = {
  userInfo:undefined, 
  todos: [],
  filter: "All"
}

class MoToDo extends MVCModel implements iTodo {

  
  constructor() {
    super(NAME, defineState);
  }

  /**
   * ADD ITEM TODO
   */
  addItem(title: string) {
    const newState = { ...this.state };

    newState.todos.unshift({
      title,
      completed: false,
      id: newState.todos.length + 1
    });

    this.update(newState);
  }

  updateItem(id: number, title: string) {
    const newState = { ...this.state };
    newState.todos.forEach((item: Todo) => {
      if (item.id === id) {
        item.title = title;
      }
    });

    this.update(newState);
  }
  removeItem(id: number) {
    const newState = { ...this.state };
    newState.todos = newState.todos.filter((todo: Todo) => todo.id !== id);
    this.update(newState);
  }

  editItem(id: number) {
    const newState = { ...this.state };
    newState.todos.forEach((item: Todo) => {
      item.status = item.id === id ? "editing" : "";
    });

    this.update(newState);
  }

  toogleCheck(id: number) {
    const newState = { ...this.state };
    newState.todos.forEach((item: Todo) => {
      if (id === item.id) {
        item.completed = !item.completed;
      }
    });

    this.update(newState);
  }
}

export default MoToDo;
