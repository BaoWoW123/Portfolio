import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();

  const navBtnEvent = (e) => {
      const btn = e.target;
      const active = document.querySelectorAll('.active')
      active.forEach((el) => el.className = '')
      btn.className = "active"
      navigate(`/${(e.target.textContent).toLowerCase()}`);
  };
  return (
    <div className="Navbar">
      <div>Picture/Something Here</div>
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
    </div>
  );
};

export default Navbar;
