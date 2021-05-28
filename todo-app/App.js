import "./styles.css";
import React, { useState } from "react";
// https://codesandbox.io/s/hopeful-buck-vjwxc?file=/src/App.js:0-2313
// https://github.com/ApplyBoard/interviews/blob/master/frontend/react/question.md

export default function App() {
  // state for input value and todos
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // handles the input change
  const handleInputChange = (e) => {
    const inputValue = e.target.value.trim();
    setInputValue(inputValue);
  };

  // handles whenever someone presses enter
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("Cannot add blank todo");
    } else {
      setTodos([
        ...todos,
        { text: inputValue, index: todos.length + 1, checked: false },
      ]);
      setInputValue("");
    }
  };

  // handles remove todo
  const handleRemoveTodo = (i) => {
    const newTodos = todos.filter((e) => e.index !== i);
    setTodos(newTodos);
  };

  // handles mark completed
  const handleMarkCompleted = (i) => {
    const newTodos = todos.map((e) =>
      e.index === i
        ? {
            ...e,
            checked: !e.checked,
          }
        : e
    );

    setTodos(newTodos);
  };

  // dynamically updated progress text
  const progressText = `${
    todos.filter((e) => e.checked).length
  } completed out of ${todos.length} tasks`;

  return (
    <div className="app">
      <form onSubmit={handleFormSubmit}>
        <input type="text" onChange={handleInputChange} value={inputValue} />
      </form>
      <h4>{progressText}</h4>
      <ul className="todo-list">
        {todos.map((e, i) => {
          return (
            <React.Fragment key={`${e}-${i}`}>
              <li
                className="todo"
                style={{
                  textDecoration: e.checked ? "line-through" : "none",
                  background: e.checked ? "#888" : "initial",
                  color: e.checked ? "#fff" : "initial",
                }}
              >
                <div
                  onClick={() => handleMarkCompleted(e.index)}
                  style={{ width: "100%" }}
                >
                  {e.text}
                </div>
                <span onClick={() => handleRemoveTodo(e.index)}>
                  {"\u00D7"}
                </span>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
