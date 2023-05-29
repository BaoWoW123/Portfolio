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
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import firebase from "../assets/logos/firebase.png";
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
        <div className="about">
          <h1>About Me</h1>
          <div>
            <p>
              Hello! I'm a health science graduate who has transitioned into software development.
              I believe software development is one of the most impactful ways to improve people's lives.
              My health science background has given me a different view on designing apps for the user, 
              which has helped me understand the need to make technology better and more accessible.
              My gritty nature has taught me to approach learning with determination and has allowed me to successfully transition from a health science background to software development.
              I'm excited to apply my skills and knowledge to software development.
              I hope to grow and continue learning in this amazing field!
            </p>
            <ul className="skillSet">
              <li>
                <img src={react} />
                REACT
              </li>
              <li>
                <img src={js} />
                JAVASCRIPT
              </li>
              <li>
                <img src={router} />
                ROUTER
              </li>
              <li>
                <img src={jest} />
                JEST
              </li>
              <li>
                <img src={git} />
                GIT
              </li>
              <li>
                <img src={github} />
                GITHUB
              </li>
              <li>
                <img src={webpack} />
                WEBPACK
              </li>
              <li>
                <img src={npm} />
                NPM
              </li>
              <li>
                <img src={tailwind} />
                TAILWIND
              </li>
              <li>
                <img src={html} />
                HTML
              </li>
              <li>
                <img src={css} />
                CSS
              </li>
              <li>
                <img src={firebase} />
                FIREBASE
              </li>
            </ul>
          </div>
        </div>
        <ul className="projects">
          <h1>Projects</h1>
          <li>
            <div>
              <a href="https://instagramclone-f3e9c.web.app/">
                <h3>Itstagram</h3>
              </a>
              <p>
                An Instagram clone with the essential features of the original
                platform. Users can change their profile image, create posts as
                well as comment on other posts. Users can create a new profile,
                login with Google, or sign in with a test account.
              </p>
              <div>
                Developed using React, test driven development (TDD), and a BaaS
                (Firebase) to store data.
              </div>
            </div>
            <div className="imgContainer">
              <img src={imgArray[0]} />
              <img src={imgArray[1]} />
            </div>
          </li>
          <li>
            <div className="imgContainer">
              <img src={imgArray[2]} />
              <img src={imgArray[3]} />
            </div>
            <div>
              <a href="https://shop-bc80d.web.app/">
                <b>Shop</b>
              </a>
              <p>
                A modern climbing shop for users to purchase a variety of
                products. The shop features a cart for users to check out their
                personalized items.
              </p>
              <div>App developed using React Router, React, & TDD.</div>
            </div>
          </li>
          <li>
            <div>
              <a href="https://knight-travails.web.app/">
                <b>Knight Travails</b>
              </a>
              <p>
                An app that shows the shortest amount of moves it takes for a
                knight from popular game Chess to move to a given square. The
                amount of moves is indicated by a color transition rather than a
                numerical value.
              </p>
              <div>
                App developed using React and knowledge of data structures &
                search algorithms.
              </div>
            </div>
            <div className="imgContainer">
              <img src={imgArray[4]} />
              <img src={imgArray[5]} />
            </div>
          </li>
          <li>
            <div className="imgContainer">
              <img src={imgArray[6]} />
              <img src={imgArray[7]} />
            </div>
            <div>
              <a href="https://whereswaldo-29041.web.app/">
                <b>Where's Waldo</b>
              </a>
              <p>
                A photo-tagging app based off of "Where's Waldo" game where the
                user has to find a character in an image. After finding all
                three characters, user has option to publish their time and view
                the scoreboard.
              </p>
              <div>
                App developed using frontend skills with Firebase as a backend
                to store scoreboard.
              </div>
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
