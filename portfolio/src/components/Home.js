import Navbar from "./Navbar";
import "../styles/Home.css";

const Home = () => {
  return (
      <div className="Home">
      <Navbar/>
      <div className="homeMain">
        <div>Home</div>
        <div className="homeTitle">
            Welcome!
        </div>
      </div>
        </div>
  );
};

export default Home;
