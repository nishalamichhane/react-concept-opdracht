//import logo from './logo.svg';
import './App.css';
import logo from '././assets/logo.png';
import React, { useState } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NotFound from "./pages/notfound/NotFound";



function App() {
  return (
      <>


        <Routes>
        <Route path="/" element = {<Home/> } />
            <Route path="/subreddit/:id" element = {<Subreddit/> } />
            <Route path="*" element={<NotFound/>} />
      </Routes>

      </>
  );
}
export default App;