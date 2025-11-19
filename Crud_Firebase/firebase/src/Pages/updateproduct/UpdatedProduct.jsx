import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../Context/Data/MyContext";

function UpdateProduct() {
  const { products, setProducts, editProducts } = useContext(MyContext);
  const navigate = useNavigate();

  const handleUpdate = () => {
    editProducts();
    navigate("/"); // go back to product list after update
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "24rem" }}>
        {/* Header */}
        <div className="d-flex align-items-center mb-3">
          <Link to="/" className="text-decoration-none me-2 text-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
          <h4 className="mb-0 fw-bold text-warning">Update Product</h4>
        </div>

        {/* Input Fields */}
        <div className="mb-3">
          <input
            type="text"
            value={products?.name || ""}
            onChange={(e) => setProducts({ ...products, name: e.target.value })}
            className="form-control"
            placeholder="Product Title"
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            value={products?.price || ""}
            onChange={(e) => setProducts({ ...products, price: e.target.value })}
            className="form-control"
            placeholder="Product Price"
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            value={products?.image || ""}
            onChange={(e) => setProducts({ ...products, image: e.target.value })}
            className="form-control"
            placeholder="Product Image URL"
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            value={products?.category || ""}
            onChange={(e) => setProducts({ ...products, category: e.target.value })}
            className="form-control"
            placeholder="Product Category"
          />
        </div>

        {/* Button */}
        <div className="d-grid">
          <button onClick={handleUpdate} className="btn btn-warning fw-bold">
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
