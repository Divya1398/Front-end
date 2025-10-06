import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function Dashboard() {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/equipmentData");
      setEquipment(res.data);
    } catch (error) {
      console.error("Error fetching equipment data:", error);
    }
  };

  // Summary counts
  const total = equipment.length;
  const working = equipment.filter((item) => item.status === "Working").length;
  const broken = equipment.filter((item) => item.status === "Not-Working").length;
  const maintenance = equipment.filter((item) => item.status === "Maintenance Due").length;

  return (
    <>
      <Header />

      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Hospital Equipment Dashboard
        </h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-100 p-4 rounded-lg shadow text-center">
            <h3 className="text-lg font-semibold text-blue-700">Total</h3>
            <p className="text-2xl font-bold">{total}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow text-center">
            <h3 className="text-lg font-semibold text-green-700">Working</h3>
            <p className="text-2xl font-bold">{working}</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg shadow text-center">
            <h3 className="text-lg font-semibold text-red-700">Not-Working</h3>
            <p className="text-2xl font-bold">{broken}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow text-center">
            <h3 className="text-lg font-semibold text-yellow-700">Maintenance Due</h3>
            <p className="text-2xl font-bold">{maintenance}</p>
          </div>
        </div>

        {/* Equipment Table */}
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Equipment List</h3>
        <table className="table-auto border-collapse border border-gray-300 w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Department</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {equipment.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                <td className="border border-gray-300 px-4 py-2">{item.department}</td>
                <td
                  className={`border border-gray-300 px-4 py-2 text-center font-semibold
                  ${
                    item.status === "Working"
                      ? "text-green-600"
                      : item.status === "Not-Working"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
