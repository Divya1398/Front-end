import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function EquipmentForm() {
  const [form, setForm] = useState({
    name: "",
    department: "",
    image: "",
    status: "",
  });

  // Array of default equipment images
  const images = [
    "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
    "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg",
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addEquipment = async (e) => {
    e.preventDefault();

    if (!form.name || !form.department || !form.status) {
      toast.error("Please fill all fields!");
      return;
    }

    // Pick random image if user didn't provide one
    const randomImage = images[Math.floor(Math.random() * images.length)];

    try {
      await axios.post("http://localhost:5000/equipmentData", {
        ...form,
        id: new Date().getTime().toString(), // unique ID
       image: form.image || 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
      });
      toast.success("Equipment added successfully!");
      setForm({ name: "", department: "", status: "", image: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to add equipment.");
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow my-6">
        <h1 className="text-center font-bold text-3xl mb-6">Add Equipment</h1>
        <form className="space-y-4" onSubmit={addEquipment}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Equipment Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Equipment Image (optional)
            </label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Paste image URL or leave blank"
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={form.department}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Status</option>
              <option value="Working">Working</option>
              <option value="Not-Working">Not-Working</option>
              <option value="Maintenance Due">Maintenance Due</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default EquipmentForm;
