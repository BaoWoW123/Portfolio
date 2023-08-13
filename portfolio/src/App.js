import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Blog from "./components/Blog";
import "./styles/App.css";

function App() {
  const navigate = useNavigate();

  window.onscroll = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".progress").style.width = `${scrolled}%`;
  };

  const navBtnEvent = (e, id) => {
    let btn = e.target;
    const active = document.querySelectorAll(".active");

    if (!e) btn = document.querySelector(".navbarBtns").children[1]; //static route projects
    active.forEach((el) => (el.className = ""));
    document.querySelector(".progress").style.width = "0%";
    document.body.scrollTop = 0;
    btn.className = "active";
    document.documentElement.scrollTop = 0;
    navigate(`/${id}`);
  };
  return (
    <div className="App">
      <Navbar reroute={navBtnEvent} />
      <Routes>
        <Route index path="/" element={<Home reroute={navBtnEvent} />} />
        <Route path="/home" element={<Home reroute={navBtnEvent} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
