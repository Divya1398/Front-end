import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    padding: '10px 20px',
    marginTop: '15px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
  };

  return (
    <div className="container text-center mt-5">
      <h1>Hello count: {count}</h1>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
