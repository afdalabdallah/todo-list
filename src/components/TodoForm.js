import React, { useState, useEffect, useRef } from "react";
import TodoList from "./TodoList";
import CreateTodo from "../modals/CreateTodo";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputFocus = useRef(null);
  useEffect(() => {
    inputFocus.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleRefresh = (e) => {
    e.preventDefault(); // prevent refresh

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    }); //submit
    setInput(""); //abis isi kosong lagi
  };

  return (
    <form
      className={props.edit ? "todo-form update" : "todo-form"}
      onSubmit={handleRefresh}
    >
      {props.edit ? (
        <>
          <textarea
            rows="7"
            value={input}
            className="todo-update"
            placeholder="Update todo"
            onChange={handleChange}
            ref={inputFocus}
          ></textarea>
          <button className="update-button">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputFocus}
          />
          <button className="todo-button">Add</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
