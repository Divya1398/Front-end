import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Service from "./Website/Pages/Service";
import Blog from "./Website/Pages/Blog";
import Feature from "./Website/Pages/Feature ";
import Gallery from "./Website/Pages/Gallery";
import Attraction from "./Website/Pages/Attraction ";
import Package from "./Website/Pages/Package";
import Team from "./Website/Pages/Team ";
import Testi from "./Website/Pages/Testi ";
import Contact from "./Website/Pages/Contact";
import NotFound from "./Website/Pages/NotFound ";
import Dashboard from "./Admin/APages/Dashboard";
import Blogsmanage from "./Admin/APages/Blogsmanage"
import TeamManage from "./Admin/APages/TeamManage";
import Addblogs from "./Admin/APages/Addblogs";
import Managegallary from "./Admin/APages/Managegallary";
import AddGallary from "./Admin/APages/AddGallary";
import Alogin from "./Admin/APages/Alogin";
import Login from "./Website/Pages/Login";
import Register from "./Website/Pages/Register";
import EditProfile from "./Website/Pages/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* website */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/feature" element={<Feature/>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/attri" element={<Attraction />} />
          <Route path="/pack" element={<Package />} />
          <Route path="/team" element={<Team />} />
          <Route path="/test" element={<Testi />} />
          <Route path='/contact' element={<Contact />} />
           <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit" element={<EditProfile />}/>

          {/* unviserl */}
          <Route path="*" element={<NotFound />} />

           {/* Admin routes */}
          <Route path="/dash" element={<Dashboard/>} />
          <Route path="/blogmanage" element={<Blogsmanage />} />
          <Route path="/teamManger" element={<TeamManage/>} />
          <Route path="/addblogs" element={<Addblogs/>} />
          <Route path="/managegallary" element={<Managegallary/>} />
           <Route path="/addgallary" element={<AddGallary/>} />
            <Route path="/alogin" element={<Alogin/>} />
        </Routes>
        <ToastContainer />

      </div>
    </BrowserRouter>
  );
}

export default App;