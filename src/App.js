import React, {useState} from 'react';
import './App.css';
import Appbar from './components/Navbar/Navbar';
import { Route, Routes, BrowserRouter, } from 'react-router-dom';
import MainContent from './components/MainContent/MainContent';
import ControlLogin from './components/Login/ControlLogin';
import Register from './components/Register/Register';
import ItemListContainer from './components/MainContent/ItemListContainer';
import ItemDetailContainer from './components/MainContent/ItemDetailContainer';
import FavouriteList from './components/FavouriteList/FavouriteList';


function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <Appbar setQuery={setQuery}/>
          <Routes>
            <Route path="/main" element={<MainContent filter={query}/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route path="/movie/:identificator" element={<ItemDetailContainer />} />
            <Route path="/" element={<ControlLogin />}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/mylist" element={<FavouriteList/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
