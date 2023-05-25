import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();

  window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector('.progress').style.width = `${scrolled}%`
  }
  const navBtnEvent = (e) => {
    const btn = e.target;
    const active = document.querySelectorAll(".active");
    active.forEach((el) => (el.className = ""));
    btn.className = "active";
    document.querySelector('.progress').style.width = '0%'
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    navigate(`/${e.target.textContent.toLowerCase()}`);
  };
  return (
    <div className="Navbar">
      <div>Picture Here</div>
      <div className="navbarBtns">
        <button type="button" onClick={navBtnEvent}>
          <div>Home</div>
        </button>
        <button type="button" onClick={navBtnEvent}>
          <div>About</div>
        </button>
        <button type="button" onClick={navBtnEvent}>
          <div>Projects</div>
        </button>
        <button type="button" onClick={navBtnEvent}>
          <div>Resume</div>
        </button>
      </div>
      <div className="progressWrapper">
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default Navbar;
