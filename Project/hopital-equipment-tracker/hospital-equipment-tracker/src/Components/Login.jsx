import React, { useState, useEffect } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  // ✅ Always check UID whenever component mounts
  useEffect(() => {
    if (localStorage.getItem("Uid")) {
      navigate("/dash");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = form;
    if (!email.trim() || !password.trim()) {
      toast.error("Email and password required");
      return;
    }

    try {
      const res = await axios.get(`http://localhost:5000/user?email=${email}`);
      if (!res.data.length) {
        toast.error("Email does not exist");
        return;
      }

      const user = res.data[0];

      if (user.password !== password) {
        toast.error("Password incorrect");
        return;
      }

      if (user.status === "block") {
        toast.error("Account blocked");
        return;
      }

      localStorage.setItem("Uid", user.id);
      localStorage.setItem("Uname", user.name);
      toast.success("Successfully logged in!");
      navigate("/dash"); // redirect to dashboard

    } catch (err) {
      toast.error("Server not responding");
    }
  };

  return (
    <MDBContainer fluid className="min-h-screen flex items-center justify-center bg-gray-100">
      <MDBRow className="justify-content-center w-full">
        <MDBCol md="6" lg="4">
          <MDBCard className="shadow-lg rounded-lg">
            <MDBCardBody className="p-5">
              <h2 className="text-center text-2xl font-bold mb-4">User Login</h2>

              <form onSubmit={handleSubmit}>
                <MDBInput
                  label="Email"
                  name="email"
                  type="email"
                  size="lg"
                  value={form.email}
                  onChange={handleChange}
                  wrapperClass="mb-4"
                  required
                />
                <MDBInput
                  label="Password"
                  name="password"
                  type="password"
                  size="lg"
                  value={form.password}
                  onChange={handleChange}
                  wrapperClass="mb-4"
                  required
                />
                <MDBCheckbox name="flexCheck" id="flexCheckDefault" label="Remember password" className="mb-4" />

                <MDBBtn type="submit" className="w-full mb-3 bg-blue-600 hover:bg-blue-700">
                  Login
                </MDBBtn>
              </form>

              <div className="text-center">
                <Link to="/signup" className="text-blue-600 hover:underline">Register now</Link>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
