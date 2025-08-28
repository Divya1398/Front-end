import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h1 className="mb-4 display-4 text-primary">
        Hello Count: <span className="badge bg-warning text-dark">{count}</span>
      </h1>

      <div className="d-flex gap-3">
        <button
          className="btn btn-success btn-lg"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-lg"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="btn btn-secondary btn-lg"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>

      <p className="mt-4 text-muted">
        Try hovering over the buttons for a nice effect!
      </p>

      <style jsx>{`
        button:hover {
          transform: scale(1.1);
          transition: 0.2s;
        }
      `}</style>
    </div>
  );
}

export default Counter;
