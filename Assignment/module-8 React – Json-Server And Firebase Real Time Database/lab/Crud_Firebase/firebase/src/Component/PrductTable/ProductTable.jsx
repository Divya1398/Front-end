import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../Context/Data/MyContext";

function ProductTable() {
  const context = useContext(MyContext);
  const { allProducts, deleteProduct, editProducthandle, Search, setSearch } = context;

  // Filter products based on search input
  const filteredProducts = allProducts.filter((product) =>
    product.name?.toLowerCase().includes(Search.toLowerCase())
  );

  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0">
        {/* Header */}
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center p-3 flex-wrap">
          <input
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="form-control w-50 mb-2 mb-md-0 bg-secondary text-white border-0"
            placeholder="Search here..."
          />

          <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">
            <img
              src="data:image/png;base64,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"
              alt="React Logo"
              width="40"
              className="rounded-circle"
            />
            <h4 className="m-0">React Firebase CRUD</h4>
          </div>

          <Link to="/addproduct">
            <button className="btn btn-outline-light fw-semibold">
              + Add Product
            </button>
          </Link>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-dark table-hover align-middle mb-0">
            <thead className="table-secondary text-dark">
              <tr>
                <th>S.No.</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Date</th>
                <th colSpan="2" className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>₹{item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.date}</td>
                    <td className="text-center">
                      <button
                        onClick={() => deleteProduct(item)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                    <td className="text-center">
                      <Link
                        to="/updateproduct"
                        onClick={() => editProducthandle(item)}
                        className="btn btn-sm btn-success"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center text-danger fw-bold">
                    Product Not Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
