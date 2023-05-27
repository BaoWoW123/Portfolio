import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = (props) => {

  window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector('.progress').style.width = `${scrolled}%`
  }

  return (
    <div className="Navbar">
      <div>Picture Here</div>
      <div className="navbarBtns">
        <button type="button" onClick={(e) => props.reroute(e, 'home')}>
          <div>Home</div>
        </button>
        <button type="button" onClick={(e) => props.reroute(e, 'about')}>
          <div>About</div>
        </button>
        <button type="button" onClick={(e) => props.reroute(e, 'projects')}>
          <div>Projects</div>
        </button>
        <button type="button" onClick={(e) => props.reroute(e, 'resume')}>
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
