import "../styles/Home.css";
import react from "../assets/logos/react.png";
import js from "../assets/logos/js.png";
import jest from "../assets/logos/jest.png";
import git from "../assets/logos/git.png";
import router from "../assets/logos/router.png";
import github from "../assets/logos/github.png";
import webpack from "../assets/logos/webpack.png";
import npm from "../assets/logos/npm.png";
import tailwind from "../assets/logos/tailwind.png";
import avatar from "../assets/avatar.png";
import imgArray from "./images";

const Home = (props) => {

  return (
    <div className="Home">
      <div className="homeMain">
        <div className="homeTitle">
          <div>
            <img src={avatar} />
          </div>
          <h1>Welcome!</h1>
        </div>
        <div className="introWrapper">
          <div className="introPara">
            I'm Bao Nguyen, an aspiring software developer from Sacramento,
            California. I am excited to create innovative and dynamic apps that
            engage my users. Whether if it's a custom e-commerce platform,
            responsive website, or anything similar, I'm here to bring that
            vision to life. So take a look around and get to know me and my
            work. Let's start building something amazing together!
          </div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="homeContent">
        <div><h1>Skillset</h1></div>
        <ul className="skillSet">
          <li>
            <img src={react} />
          </li>
          <li>
            <img src={js} />
          </li>
          <li>
            <img src={router} />
          </li>
          <li>
            <img src={jest} />
          </li>
          <li>
            <img src={git} />
          </li>
          <li>
            <img src={github} />
          </li>
          <li>
            <img src={webpack} />
          </li>
          <li>
            <img src={npm} />
          </li>
          <li>
            <img src={tailwind} />
          </li>
        </ul>
        <ul className="projects">
          <h1>Projects</h1>
          <li>
            <div>
              <a href="https://instagramclone-f3e9c.web.app/">
                <h3>Itstagram</h3>
              </a>
              <p>
                An Instagram clone app developed using react, unit testing, and
                a BaaS (Firebase) to store app data.
              </p>
            </div>
            <div className="imgContainer">
              <img src={imgArray[0]} />
              <img src={imgArray[1]} />
            </div>
          </li>
          <li>
            <div className="imgContainer">
            <img src={imgArray[2]}/> 
            <img src={imgArray[3]}/> 
            </div>
            <div>
              <a href="https://shop-bc80d.web.app/">
                <b>Shop</b>
              </a>
              <p>
                A modern shopping app with multiple webpages developed using
                routes and previous concepts of React components. App is created
                with TDD.
              </p>
            </div>
          </li>
          <li>
            <div>
              <a href="https://knight-travails.web.app/">
                <b>Knight Travails</b>
              </a>
              <p>
                An app that shows the shortest amount of moves it takes for a
                knight(from popular game Chess) to move to a given square.
              </p>
            </div>
            <div className="imgContainer">
              <img src={imgArray[4]} /> 
              <img src={imgArray[5]}/>
            </div>
          </li>
          <li>
            <div className="imgContainer">
              <img src={imgArray[6]}/>
              <img src={imgArray[7]}/>
            </div>
            <div>
              <a href="https://whereswaldo-29041.web.app/">
                <b>Where's Waldo</b>
              </a>
              <p>
                A photo-tagging app developed using frontend skills with
                Firebase as a backend. App based off the classic game "Where's
                Waldo".
              </p>
            </div>
          </li>
          <button onClick={() => props.reroute("", "projects")}>
            See all projects
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Home;
