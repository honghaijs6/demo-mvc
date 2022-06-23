import iTodoController from "../controllers/iTodoController";
import React from "react";

interface TodoProps {
  handler: iTodoController;
}

const TodoMaker: React.FC<TodoProps> = ({ handler }) => {

  const [txtInput, setInput] = React.useState('');

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const submit = (e: React.KeyboardEvent<HTMLInputElement>) => {


    if (e.key === 'Enter') {
      handler.callAction(txtInput, "add");
      setInput('')
    }


  };
  return (
    <input
      type="text"
      value={txtInput}
      className="new-todo"
      placeholder="What needs to be done?"
      onKeyDown={submit}
      onChange={onchange}

      autoFocus
    />
  );
};

export default TodoMaker;
