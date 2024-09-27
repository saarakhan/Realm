import './App.css';
import Topbar from './components/TopBar/Topbar';
// import SinglePost from './pages/single/Single.jsx';
import Write from './pages/write/Write.jsx';
import Home from './pages/home/Home.jsx';

function App() {
  return (
    <>
      <Topbar />
      {/* <Home /> */}
      {/* <SinglePost /> */}
      <Write />
    </>
  );
}

export default App;
