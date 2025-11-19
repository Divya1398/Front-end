import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Carts() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("https://dummyjson.com/carts");
    setuser(res.data.carts);
  };

  return (
    <div className="container">
      <h2 className="my-3">Cart Data</h2>
      {user && user.map((cart, index) => (
        <div key={index} className="mb-5">
          <h4 className="text-secondary">Cart ID: {cart.id}</h4>
          <div className="row">
            {cart.products.map((product, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card border-secondary mb-3" style={{ width: '18rem' }}>
                  <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Price: ₹{product.price}</p>
                    <p className="card-text">Quantity: {product.quantity}</p>
                    <p className="card-text">Discounted Total: ₹{product.discountedPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carts;
