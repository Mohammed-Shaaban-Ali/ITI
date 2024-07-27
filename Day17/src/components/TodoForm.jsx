import React from "react";

export default function TodoForm({ setInput, input, addTodo }) {
  return (
    <div className="d-flex my-5" style={{ gap: "32px" }}>
      <input
        type="text"
        className="form-control"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="btn btn-primary px-5 py-2" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}
