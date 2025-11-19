import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Props_Practice from './props/Card_props';
// import ClassCompo from './Component/ClassCompo';
// import FuncCompo from './Component/FuncCompo';
// import User from './Jsx/User';
// import Css from "./Css/Css";
// import Header from './Task/Header/Header';
// import Section from './Task/Section/Section';
// import Footer from './Task/footer/Footer';
// import ClassProps from "./props/ClassProps"
// import FuncProps from './props/FuncProps';
// import PropsData from './props/PropsData';
// import Card_props from './props/Card_props';
// import Carddata from './props/Carddata';
// import UseEffect  from './Useeffct/UseEffect';
// import UserTab from './Useeffct/UserTab';
// import Users from './Useeffct/Users'
// import Todos from './Useeffct/Todos';
// import Product from "./Useeffct/Card/Product"
// import Carts from './Useeffct/Card/Carts'
// import Receipe from './Useeffct/Card/Receipe'
// import Post from './Useeffct/Card/Post'
// import Photo from './Useeffct/Card/Photo'
// import Prdt from './Useeffct/Card/Prdt'
// import ToDoList from './Task/ToDoList'
import Home from './layout/pages/Home';
import About from './layout/pages/About';
import Contact from './layout/pages/Contact';
import Help from './layout/pages/Help';
import Usereducer from './layout/pages/Usereducer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 





function App() {
  return (
    <>

      <BrowserRouter>
        {/* <h1>Hello this react application</h1> */}
        {/* <ClassCompo/> */}
        {/* <FuncCompo/> */}
        {/* <User/> */}
        {/* <Css/> */}
        {/* <Header />
      <Section />
      <Footer /> */}
        {/* <ClassProps/> */}
        {/* <FuncProps/> */}
        {/* <PropsData/> */}
        {/* <Card_props/> */}
        {/* <Carddata/> */}
        {/* <UseEffect/> */}
        {/* <UserTab/> */}
        {/* <Users/> */}
        {/* <Todos/> */}
        {/* <Product/> */}
        {/* <Carts/> */}
        {/* <Receipe/> */}
        {/* <Post/> */}
        {/* <Photo/> */}
        {/* <Prdt/> */}
        {/* <ToDoList/> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Usereducer" element={<Usereducer />} />


        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
