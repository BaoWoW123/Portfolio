import "../styles/Navbar.css";
import github from "../assets/logos/github.png";
const Navbar = (props) => {
  return (
    <div className="Navbar">
      <a href="https://github.com/BaoWoW123">
        <img src={github} />
      </a>
      <div className="navbarBtns">
        <button type="button" onClick={(e) => props.reroute(e, "home")}>
          <div>Home</div>
        </button>
        <button type="button" onClick={(e) => props.reroute(e, "about")}>
          <div>About</div>
        </button>
        <button type="button" onClick={(e) => props.reroute(e, "projects")}>
          <div>Projects</div>
        </button>
        <button type="button" onClick={(e) => props.reroute(e, "resume")}>
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
