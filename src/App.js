import React, {useState} from 'react';
import './App.css';
import Profile from './components/Profile/Profile.jsx';
import Appbar from './components/Navbar/Navbar';
import { Route, Routes, BrowserRouter, } from 'react-router-dom';
import MainContent from './components/MainContent/MainContent';
import ControlLogin from './components/Login/ControlLogin';
import Register from './components/Register/Register';
import ItemListContainer from './components/MainContent/ItemListContainer';
import ItemDetailContainer from './components/MainContent/ItemDetailContainer';



function App() {
  const [query, setQuery] = useState('');

  // const user = JSON.parse(localStorage.getItem('user'));

  // console.log(user)
  return (
    <div className="App">
      <BrowserRouter>
        <Appbar setQuery={setQuery}/>
          <Routes>
            <Route path="/" element={<MainContent filter={query}/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route path="/movie/:identificator" element={<ItemDetailContainer />} />
            <Route path="/login" element={<ControlLogin />}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile" element={<Profile />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
