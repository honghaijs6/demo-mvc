import iTodoController from "../controllers/iTodoController";
import React from "react";

interface TodoProps {
  handler: iTodoController;
}

const TodoMaker: React.FC<TodoProps> = ({ handler = Object() }) => {
  const submit = (e) => {
    if (e.which === 13) {
      handler.callAction(e.target.value, "add");
      e.target.value = "";
    }
  };
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      onKeyDown={(e) => {
        submit(e);
      }}
      autoFocus
    />
  );
};

export default TodoMaker;
