import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import Nav from './Nav';

function Table() {
   <Nav/>
  const [user, setUser] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUser(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">User Table</h1>

      <MDBTable className="border border-gray-200 rounded-lg shadow-md">
        <MDBTableHead>
          <tr className="bg-blue-100 text-blue-900 font-bold">
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>E-mail</th>
            <th scope='col'>Company Name</th>
            <th scope='col'>City</th>
            </tr>
        </MDBTableHead>

        <MDBTableBody>
          {user.map((data, index) => (
            <tr key={index} >
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.company.name}</td>
              <td>{data.address.city}</td>
              </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default Table;
