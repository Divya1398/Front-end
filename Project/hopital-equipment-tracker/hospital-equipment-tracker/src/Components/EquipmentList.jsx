import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Footer from '../Common/Footer';
import Header from '../Common/Header';

function EquipmentList() {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    department: '',
    image: '',
    status: '',
    desc: '',
  });

  const [singleview, setsingleview] = useState({
    name: '',
    department: '',
    image: '',
    status: '',
    desc: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all equipment
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/equipmentData');
      setList(res.data);
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch equipment list');
    }
  };

  // View single equipment
  const handleSingleView = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/equipmentData/${id}`);
      setsingleview(res.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch equipment details');
    }
  };

  // Edit equipment
  const handleEditClick = (item) => {
    setEditId(item.id);
    setEditForm({
      name: item.name,
      department: item.department,
      image: item.image,
      status: item.status,
      desc: item.desc || '',
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/equipmentData/${editId}`, editForm);
      toast.success('Equipment updated successfully!');
      setEditId(null);
      fetchData();
    } catch (error) {
      console.error(error);
      toast.error('Failed to update equipment');
    }
  };

  // Delete equipment
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/equipmentData/${id}`);
      toast.success('Equipment deleted successfully!');
      fetchData();
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete equipment');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <div className="flex flex-col items-center w-full px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Equipment List</h1>

        {/* Equipment Table */}
        <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
          <MDBTable hover responsive className="table-auto mx-auto">
            <MDBTableHead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Department</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </MDBTableHead>

            <MDBTableBody>
              {list.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-500">
                    No equipment found
                  </td>
                </tr>
              ) : (
                list.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`hover:bg-gray-100 transition duration-200 ${
                      index % 2 === 0 ? 'bg-gray-50' : ''
                    }`}
                  >
                    <td className="px-6 py-3 font-medium">{item.id}</td>
                    <td className="px-6 py-3">{item.name}</td>
                    <td className="px-6 py-3">{item.department}</td>
                    <td
                      className={`px-6 py-3 font-semibold ${
                        item.status === 'Working'
                          ? 'text-green-600'
                          : item.status === 'Not-Working'
                          ? 'text-red-600'
                          : 'text-yellow-600'
                      }`}
                    >
                      {item.status}
                    </td>
                    <td className="px-6 py-3 flex space-x-2">
                      <button
                        onClick={() => handleSingleView(item.id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded shadow"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleEditClick(item)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded shadow"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded shadow"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </MDBTableBody>
          </MDBTable>
        </div>

        {/* Single View Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md mx-4 overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-bold">{singleview.name}</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="p-4">
                <div className="mb-4">
                  <img
                    src={
                      singleview.image ||
                      'https://via.placeholder.com/400x300.png?text=No+Image'
                    }
                    alt={singleview.name}
                    className="w-full rounded-lg mb-2"
                  />
                  <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {singleview.department}
                    </span>
                    <span className="flex items-center gap-1">{singleview.status}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{singleview.desc}</p>
              </div>

              <div className="flex justify-end gap-2 p-4 border-t">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Form */}
        {editId && (
          <div className="w-full max-w-2xl mt-8 p-6 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Edit Equipment</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
              <div>
                <label>Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={editForm.image}
                  onChange={handleEditChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label>Department</label>
                <input
                  type="text"
                  name="department"
                  value={editForm.department}
                  onChange={handleEditChange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
              <div>
                <label>Status</label>
                <select
                  name="status"
                  value={editForm.status}
                  onChange={handleEditChange}
                  className="w-full border px-3 py-2 rounded"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Working">Working</option>
                  <option value="Not-Working">Not-Working</option>
                  <option value="Maintenance Due">Maintenance Due</option>
                </select>
              </div>
              <div>
                <label>Description</label>
                <textarea
                  name="desc"
                  value={editForm.desc}
                  onChange={handleEditChange}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Optional description"
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setEditId(null)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default EquipmentList;
