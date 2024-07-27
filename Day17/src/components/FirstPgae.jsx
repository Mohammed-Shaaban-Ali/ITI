import React from "react";

export default function FirstPgae({ setStart }) {
  return (
    <main>
      <h1>Welcome To To-Do</h1>
      <button
        className="btn btn-success px-5 py-2"
        onClick={() => setStart(true)}
      >
        Show To-Do
      </button>
    </main>
  );
}
