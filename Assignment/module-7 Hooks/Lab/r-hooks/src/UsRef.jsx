import React, { useState, useRef } from "react";

function UsRef() {
  const [count, setCount] = useState(0);

  // useRef to track render count without re-render
  const renderCount = useRef(0);
  const inputRef = useRef(null);

  // Increment count
  const increment = () => {
    setCount(count + 1);
  };

  // Focus input using ref
  const focusInput = () => {
    inputRef.current.focus();
  };

  // Update render count
  renderCount.current += 1;

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h1 className="mb-4">useRef Demo: Avoid Re-Renders</h1>

      <h2 className="mb-3">Count: {count}</h2>
      <div className="d-flex gap-3 mb-4">
        <button className="btn btn-success" onClick={increment}>
          Increment
        </button>
        <button className="btn btn-info" onClick={focusInput}>
          Focus Input
        </button>
      </div>

      <input
        type="text"
        ref={inputRef}
        placeholder="Type here..."
        className="form-control mb-3"
        style={{ width: "300px" }}
      />

      <p className="text-muted">
        Render Count (tracked with useRef): {renderCount.current}
      </p>
    </div>
  );
}

export default UsRef;
