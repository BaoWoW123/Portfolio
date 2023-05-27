import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import './styles/App.css';

function App() {
    const navigate = useNavigate();

    const navBtnEvent = (e, id) => {
      let btn = e.target;
      const active = document.querySelectorAll(".active");

      if (!e) btn = document.querySelector('.navbarBtns').children[2]; //static route projects
      active.forEach((el) => (el.className = ""));
      document.querySelector('.progress').style.width = '0%'
      document.body.scrollTop = 0;
      btn.className = "active";
      document.documentElement.scrollTop = 0;
      navigate(`/${id}`);
    };
  return (
    <div className="App">
      <Navbar reroute ={navBtnEvent}/>
      <Routes>
        <Route index path='/' element={<Home reroute ={navBtnEvent}/>} />
        <Route path='/home' element={<Home reroute ={navBtnEvent}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/resume' element={<Resume/>} />
      </Routes>

    </div>
  );
}

export default App;
