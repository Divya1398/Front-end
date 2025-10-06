import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();

  // Form state
  const [edited, setEdited] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    status: "",
  });

  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      const uid = localStorage.getItem("Uid");
      if (!uid) {
        toast.error("Please log in first");
        navigate("/ulogin");
        return;
      }

      try {
        const res = await axios.get(`http://localhost:5000/user/${uid}`);
        setEdited(res.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch user data");
      }
    };
    fetchUser();
  }, [navigate]);

  const handleChange = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!edited.name.trim() || !edited.email.trim() || !edited.password.trim()) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const res = await axios.patch(
        `http://localhost:5000/user/${edited.id}`,
        edited
      );
      toast.success("Profile updated successfully!");
      localStorage.setItem("Uname", res.data.name);
      navigate("/dash");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    }
  };

  const logout = () => {
    localStorage.removeItem("Uid");
    localStorage.removeItem("Uname");
    toast.success("Logged out successfully!");
    navigate("/ulogin");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <MDBContainer
  fluid
  className="flex items-center justify-center bg-gray-100"
  style={{
    minHeight: "calc(100vh - 64px)", // subtract header height
    paddingTop: "64px", // ensure header space
    backgroundImage:
      "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="w-full max-w-md">
    <form onSubmit={handleUpdate}>
      <MDBCard className="shadow-lg rounded-lg bg-white bg-opacity-90">
        <MDBCardBody className="p-6">
          <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
            Update Profile
          </h2>

          <MDBInput
            label="Name"
            name="name"
            value={edited.name}
            onChange={handleChange}
            wrapperClass="mb-4"
            size="lg"
            type="text"
            required
          />
          <MDBInput
            label="Email"
            name="email"
            value={edited.email}
            onChange={handleChange}
            wrapperClass="mb-4"
            size="lg"
            type="email"
            required
          />
          <MDBInput
            label="Password"
            name="password"
            value={edited.password}
            onChange={handleChange}
            wrapperClass="mb-4"
            size="lg"
            type="password"
            required
          />

          <MDBBtn
            type="submit"
            className="w-full mb-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-2 rounded"
          >
            Update Profile
          </MDBBtn>

          <MDBBtn
            type="button"
            onClick={logout}
            className="w-full bg-red-500 hover:bg-red-600 text-white text-lg font-medium py-2 rounded"
          >
            Logout
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </form>
  </div>
</MDBContainer>


      <Footer />
    </div>
  );
}

export default EditProfile;
