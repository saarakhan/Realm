import './App.css';
import Topbar from './components/topBar/Topbar.jsx';
import Header from './components/header/Header.jsx';
import SinglePost from './pages/single/Single.jsx';
import Write from './pages/write/Write.jsx';
import Home from './pages/home/Home.jsx';
import Settings from './pages/setting/Setting.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Single from './pages/single/Single.jsx';
import Contact from './pages/contact/Contact.jsx';
import { Context } from './context/Context.jsx';
import { useContext } from 'react';

function App() {
  const user = useContext(Context);
  return (
      <Router>
        <Topbar />
        <Routes>
          <Route path='/' Component={user ? Home : Register}></Route>
          <Route path='/register' Component={user ? Home : Register}></Route>
          <Route path='/login' Component={user ? Home : Login}></Route>
          <Route path='/write' Component={user ? Write : Register}></Route>
          <Route path='/contact' Component={user ? Contact : Register}></Route>
          <Route path='/setting' Component={user ? Settings : Register}></Route>
          <Route path='/post/:postId' Component={Single}></Route>
        </Routes>
      </Router>
  );
}

export default App;
