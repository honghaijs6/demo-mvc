import React, { useState } from "react";
import iTodoController from "../controllers/iTodoController";

interface TodoListProps {
  handler?: iTodoController;
}

interface itemType {
  title: string;
  completed: boolean;
  id: number;
  status?: string;
}

const TodoList: React.FC<TodoListProps> = ({ handler }) => {
  if (!handler) return null;

  const { state } = handler.MODELS.todo;

  const inputHandler = (e) => {};

  const submit = (id: number, title: string) => {
    handler.MODELS.todo.updateItem(id, title);
  };

  const doubleClickHandler = (item: itemType) => {
    handler.MODELS.todo.editItem(item.id);
  };

  const destroy = (id: number = 0) => {
    handler.callAction("", "remove", id);
  };

  const toggleCheck = (id: number) => {
    handler.MODELS.todo.toogleCheck(id);
  };

  return (
    <ul className="todo-list">
      {state.todos.map((item: itemType, index = 0) => {
        const status =
          item.status === "editing"
            ? "editing"
            : item.completed
            ? "completed"
            : "";

        return (
          <li key={index} className={status}>
            <div className="view">
              <input
                className="toggle"
                readOnly
                type="checkbox"
                checked={item.completed}
                onClick={() => {
                  toggleCheck(item.id);
                }}
              />
              <label
                onDoubleClick={() => {
                  doubleClickHandler(item);
                }}
              >
                {item.title}
              </label>
              <button
                className="destroy"
                onClick={() => {
                  destroy(item.id);
                }}
              />
            </div>
            <input
              className="edit"
              value={item.title}
              onChange={inputHandler}
              onKeyDown={submit}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
