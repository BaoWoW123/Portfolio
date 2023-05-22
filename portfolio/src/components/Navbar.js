import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="Navbar">
      <div>Picture Here</div>
      <div className="navbarBtns">
        <button type="button" onClick={() => navigate("/home")}>
          Home
        </button>
        <button type="button" onClick={() => navigate("/about")}>
          About
        </button>
        <button type="button" onClick={() => navigate("/projects")}>
          Projects
        </button>
        <button type="button" onClick={() => navigate("/resume")}>
          Resume
        </button>

      </div>
    </div>
  );
};

export default Navbar;
