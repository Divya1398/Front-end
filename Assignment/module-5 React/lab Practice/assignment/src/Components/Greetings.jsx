// Task 1: Functional Component
import React from 'react';

function Greetings({ name }) {
  return (
    <div style={{
      textAlign: "center",
      padding: '15px',
      textAlign: 'center',
      marginBottom: '20px'
    }}>
      <h1>Hello {name}!</h1>
    </div>
  );
}

export default Greetings;