import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Nav from "./Nav";

function AddUser() {
   <Nav/>
  const [form, setForm] = useState({ name: "",username: "", email: "" });

  // handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.username) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/users", form);
      toast.success("User added successfully!");
      setForm({ name: "", email: "",username: "" }); // reset form
    } catch (err) {
      console.error(err);
      toast.error("Failed to add user");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add New User</h2>
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded shadow w-50 mx-auto"
      >
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">User Name:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Username"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
