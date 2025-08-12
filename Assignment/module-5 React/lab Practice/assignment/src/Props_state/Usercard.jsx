import React from 'react';

function Usercard({ img, title, name, age, location }) {
  const cardStyle = {
    width: '20rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    borderRadius: '10px',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif'
  };

  const imgStyle = {
    height: '200px',
    objectFit: 'cover',
    width: '100%'
  };

  const bodyStyle = {
    padding: '15px',
    backgroundColor: '#f9f9f9'
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginRight: '5px',
    color: '#555'
  };

  const btnStyle = {
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    color: 'white',
    cursor: 'pointer',
    marginTop: '10px'
  };

  return (
    <div className="container my-3">
      <div style={cardStyle}>
        <img src={img} alt={`Profile image of ${name}`} style={imgStyle} />
        <div style={bodyStyle}>
          <h5>{title}</h5>
          <p><span style={labelStyle}>Name:</span>{name}</p>
          <p><span style={labelStyle}>Age:</span>{age}</p>
          <p><span style={labelStyle}>Location:</span>{location}</p>
          <button style={btnStyle}>Data</button>
        </div>
      </div>
    </div>
  );
}

export default Usercard;
