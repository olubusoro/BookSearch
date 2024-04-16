import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './context.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Booklist from "./components/Booklist/Booklist";
import Bookdetails from "./components/Bookdetails/Bookdetails";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="about" element={<About/> }/>
        <Route path="book" element={<Booklist/> }/>
        <Route path="/book/:id" element={<Bookdetails/> }/>
      </Route>
    </Routes>
  </BrowserRouter>
  </AppProvider>
)
