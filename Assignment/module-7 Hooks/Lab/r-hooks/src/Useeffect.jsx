import axios from "axios";
import React, { useEffect, useState } from "react";

function Useeffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Productdata();
  }, []);

  const Productdata = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <h1 className="text-center mb-5 display-4 text-primary">
        Hello! Products List
      </h1>

      <div className="container">
        <div className="row g-4">
          {data &&
            data.map((product, index) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={product.image}
                    className="card-img-top p-3"
                    style={{ height: "250px", objectFit: "contain" }}
                    alt={product.title}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate">{product.title}</h5>
                    <p className="card-text text-muted small flex-grow-1">
                      {product.description.slice(0, 80)}...
                    </p>
                    <div className="d-grid">
                      <a href="#" className="btn btn-primary btn-sm">
                        View Product
                      </a>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-0 text-center">
                    <span className="badge bg-success">${product.price}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Useeffect;
