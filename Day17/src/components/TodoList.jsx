import React from "react";

export default function TodoList({ todos, deleteTodo }) {
  return (
    <>
      {todos.length > 0 ? (
        <ul className="list-group">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <h5 className="mb-0">{todo}</h5>
              <button
                className="btn btn-danger btn-sm px-5 py-2"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h5 className="text-center text-danger">No To Do To Show</h5>
      )}
    </>
  );
}
