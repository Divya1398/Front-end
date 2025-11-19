import React from 'react'


function Card_props({image,title,price,rating,buttontext}) {
  return (
   <div>
  <div className="container">
    <div className="card" style={{width: '18rem',backgroundColor:'#f0f4f8',padding:'10px'}}>
    <img src={image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text"><b> Price:{price}</b></p>
      <p className="card-text"><b>Rating:{rating}</b></p>
      
      <button style={{backgroundColor:'green',color:'white',cursor:'pointer',padding:'10px',borderRadius:'5px'}}>{buttontext}</button>
    </div>
  </div>
  </div>
</div>

    // </div>
  )
}



export default Card_props;
