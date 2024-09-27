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

function App() {
  const user = true;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/register' Component={Register}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/write' Component={Write}></Route>
        <Route path='/setting' Component={Settings}></Route>
        <Route path='/post/:postId' Component={Single}></Route>
      </Routes>
    </Router>
  );
}

export default App;
