import React from 'react';
import './App.css';
import Topbar from './components/topBar/Topbar.jsx';
import Header from './components/header/Header.jsx';
import SinglePost from './pages/single/Single.jsx';
import Write from './pages/write/Write.jsx';
import Home from './pages/home/Home.jsx';
import Settings from './pages/setting/Setting.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact/Contact.jsx';
import { Context } from './context/Context.jsx';
import { useContext } from 'react';

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path='/' element={user ? <Home /> : <Register />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/write' element={user ? <Write /> : <Register />} />
        <Route path='/contact' element={user ? <Contact /> : <Register />} />
        <Route path='/setting' element={user ? <Settings /> : <Register />} />
        <Route path='/post/:postId' element={user ? <SinglePost /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
