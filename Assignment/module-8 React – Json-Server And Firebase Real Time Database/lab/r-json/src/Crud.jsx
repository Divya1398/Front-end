import React, { useEffect, useState } from "react";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import Nav from "./Nav";

function Crud() {
  <Nav/>
  const [users, setUsers] = useState([]);

  // Edit modal state
  const [editForm, setEditForm] = useState({ id: "", name: "", username: "", email: "" });
  const [showEdit, setShowEdit] = useState(false);

  // Patch modal state
  const [patchForm, setPatchForm] = useState({ id: "", email: "" });
  const [showPatch, setShowPatch] = useState(false);

  // FETCH DATA
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // DELETE USER
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      toast.success("User deleted successfully!");
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  // OPEN EDIT MODAL
  const openEditModal = (user) => {
    setEditForm(user);
    setShowEdit(true);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/users/${editForm.id}`, editForm);
      toast.success("User updated successfully!");
      fetchData();
      setShowEdit(false);
      setEditForm({ id: "", name: "", username: "", email: "" });
    } catch (err) {
      console.error(err);
    }
  };

  // OPEN PATCH MODAL
  const openPatchModal = (user) => {
    setPatchForm({ id: user.id, email: user.email });
    setShowPatch(true);
  };

  const patchUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${patchForm.id}`, { email: patchForm.email });
      toast.success("Email patched successfully!");
      fetchData();
      setShowPatch(false);
      setPatchForm({ id: "", email: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">User Table</h1>

      {/* TABLE */}
      <MDBTable className="border border-gray-200 rounded-lg shadow-md">
        <MDBTableHead>
          <tr className="bg-blue-100 text-blue-900 font-bold">
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td className="flex gap-2">
                <MDBBtn color="primary" size="sm" onClick={() => openEditModal(u)}>
                  Edit
                </MDBBtn>
                <MDBBtn color="danger" size="sm" onClick={() => deleteUser(u.id)}>
                  Delete
                </MDBBtn>
                <MDBBtn color="warning" size="sm" onClick={() => openPatchModal(u)}>
                  Patch Email
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>

      {/* EDIT MODAL */}
      {showEdit && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
            <form onSubmit={updateUser} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                placeholder="Name"
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="username"
                value={editForm.username}
                onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
                placeholder="Username"
                className="p-2 border rounded"
              />
              <input
                type="email"
                name="email"
                value={editForm.email}
                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                placeholder="Email"
                className="p-2 border rounded"
              />
              <div className="flex justify-end gap-2 mt-2">
                <MDBBtn color="secondary" onClick={() => setShowEdit(false)}>
                  Cancel
                </MDBBtn>
                <MDBBtn color="primary" type="submit">
                  Update
                </MDBBtn>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PATCH MODAL */}
      {showPatch && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Patch Email</h2>
            <form onSubmit={patchUser} className="flex flex-col gap-3">
              <input
                type="email"
                name="email"
                value={patchForm.email}
                onChange={(e) => setPatchForm({ ...patchForm, email: e.target.value })}
                placeholder="Email"
                className="p-2 border rounded"
              />
              <div className="flex justify-end gap-2 mt-2">
                <MDBBtn color="secondary" onClick={() => setShowPatch(false)}>
                  Cancel
                </MDBBtn>
                <MDBBtn color="warning" type="submit">
                  Update Email
                </MDBBtn>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Crud;
