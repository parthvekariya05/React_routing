import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./componets/Layout";
import Home from "./componets/Home";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Data from "./componets/Data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faculty" element={<Data />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);