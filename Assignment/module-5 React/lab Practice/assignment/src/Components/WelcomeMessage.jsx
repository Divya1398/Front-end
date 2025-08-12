// Task 2: Class Component
import React, { Component } from 'react';

export class WelcomeMessage extends Component {
  render() {
    return (
      <div style={{
        padding: '15px',
        textAlign: 'center',
      }}>
        <h1>Welcome to React!</h1>
      </div>
    );
  }
}

export default WelcomeMessage;