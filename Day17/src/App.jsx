import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import FirstPgae from "./components/FirstPgae";

function App() {
  const [start, setStart] = useState(false);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((item, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container mt-5">
      {start ? (
        <>
          <h1 className="text-center">To-Do List</h1>

          <TodoForm setInput={setInput} addTodo={addTodo} input={input} />

          <TodoList todos={todos} deleteTodo={deleteTodo} />

          <button
            className=" mx-auto btn btn-warning px-5 py-2"
            style={{ marginTop: "128px" }}
            onClick={() => setStart(false)}
          >
            Hide To-Do
          </button>
        </>
      ) : (
        <FirstPgae setStart={setStart} />
      )}
    </div>
  );
}

export default App;
