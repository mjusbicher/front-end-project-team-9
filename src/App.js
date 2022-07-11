import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile.jsx';
import Appbar from './components/Navbar/Navbar';
import { Route, Routes, BrowserRouter, } from 'react-router-dom';
import MainContent from './components/MainContent/MainContent';
import ControlLogin from './components/Login/ControlLogin';
import Register from './components/Register/Register';



function App() {

  const user = JSON.parse(localStorage.getItem('user'));

  console.log(user)
  return (
    <div className="App">
      <BrowserRouter>
        <Appbar/>
          <Routes>
            <Route path="/" element={<MainContent />}/>
            <Route path="/login" element={<ControlLogin />}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile" element={<Profile />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
