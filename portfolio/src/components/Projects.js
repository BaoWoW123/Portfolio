import "../styles/Projects.css";
import {
  firebase,
  jest,
  js,
  octopus,
  react,
  router,
  html,
  css,
  webpack,
  npm,
  node,
  express,
  mongo,
  pug,
  passport,
  jwt,
  expo,
} from "../assets/logos/logos.js";
const Projects = ({ navigate }) => {
  return (
    <div className="Projects">
      <h1 style={{ padding: "20px" }}>Projects</h1>
      <ul className="projectsList">
        <li className="project">
          <h3>
            Climbing Tracker
            <div>Jun 2023 - Current</div>
          </h3>
          <p>
            A mobile app for climbers of all levels to track their climbing and
            discover ways to improve their progress. Developed from my passion
            for the sport.
          </p>
          <a
            href="https://github.com/BaoWoW123/Climbing-Tracker"
            target={"_blank"}
          >
            View Code
          </a>
          <ul>
            <li>
              <img src={react} />
              <div className="imgName">React Native</div>
            </li>
            <li>
              <img src={expo} />
              <div className="imgName">Expo</div>
            </li>
          </ul>
          <div>
            <span>React Native with Expo</span>
            <span>Third Party Libraries Implementation</span>
          </div>
        </li>
        <li className="project">
          <h3>
            Blog API
            <div> Jul 2023 - Aug 2023</div>
          </h3>
          <p>
            An API built on the backend that enables authorized users to
            write blog posts and functions as a data-fetching endpoint. The
            frontend application operates independently from the backend, and
            the blog content is retrieved by a distinct app through the "/posts"
            route utilizing the API URL.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              fontSize: "inherit",
            }}
          >
            <a
              href="https://sparkling-snowflake-3789.fly.dev/"
              target={"_blank"}
            >
              View API
            </a>

            <a onClick={() => navigate(`/blog`)}>View Blog</a>
          </div>
          <ul>
            <li>
              <img src={express} />
              <div className="imgName">Express.js</div>
            </li>
            <li>
              <img src={jwt} />
              <div className="imgName">JSON Web Token</div>
            </li>
            <li>
              <img src={mongo} />
              <div className="imgName">MongoDB</div>
            </li>
            <li>
              <img src={passport} />
              <div className="imgName">Passport.js</div>
            </li>
          </ul>
          <div>
            <span>
              Separate Backend {"&"} Frontend (API {"&"} blog site)
            </span>
            <span>REST APIs Development</span>
          </div>
        </li>
        <li className="project">
          <h3>
            Members Only
            <div>Jul 2023 - Aug 2023</div>
          </h3>
          <p>
            A public message board where users can read posts. Signing up allows
            users to create posts. Normal users can become authorized users
            which have the privilege of seeing the authors by solving a riddle.
          </p>
          <a href="https://github.com/BaoWoW123/Members-Only" target={"_blank"}>
            View Code
          </a>
          <ul>
            <li>
              <img src={express} />
              <div className="imgName">Express.js</div>
            </li>
            <li>
              <img src={pug} />
              <div className="imgName">Pug.js</div>
            </li>
            <li>
              <img src={mongo} />
              <div className="imgName">MongoDB</div>
            </li>
            <li>
              <img src={passport} />
              <div className="imgName">Passport.js</div>
            </li>
          </ul>
          <div>
            <span>Bcrypt Hashing with Password Authentication</span>
            <span>MongoDB Management</span>
          </div>
        </li>
        <li className="project">
          <h3>
            Inventory Manager
            <div> Jul 2023 - Jul 2023</div>
          </h3>
          <p>
            A CRUD-focused app for users to manage a car inventory. Users can
            create cars of various makes, models, years, and body types.
          </p>
          <a
            href="https://github.com/BaoWoW123/Inventory-Manager"
            target={"_blank"}
          >
            View Code
          </a>
          <ul>
            <li>
              <img src={express} />
              <div className="imgName">Express.js</div>
            </li>
            <li>
              <img src={pug} />
              <div className="imgName">Pug.js</div>
            </li>
            <li>
              <img src={mongo} />
              <div className="imgName">MongoDB</div>
            </li>
            <li>
              <img src={node} />
              <div className="imgName">Node.js</div>
            </li>
          </ul>
          <div>
            <span>CRUD Operations with RESTful Routing</span>
            <span>MongoDB/Backend Management with MVC Pattern</span>
          </div>
        </li>
        <li className="project">
          <h3>
            Itstagram
            <div> Mar 2023 - May 2023</div>
          </h3>
          <p>
            An Instagram clone with the essential features of the original
            platform. Users can change their profile image, create posts as well
            as comment on other posts. Users can create a new profile, login
            with Google, or sign in with a test account.
          </p>{" "}
          <a href="https://instagramclone-f3e9c.web.app/" target={"_blank"}>
            View App
          </a>
          <ul>
            <li>
              <img src={react} />
              <div className="imgName">React</div>
            </li>
            <li>
              <img src={firebase} />
              <div className="imgName">Firebase</div>
            </li>
            <li>
              <img src={octopus} />
              <div className="imgName">React Testing Library</div>
            </li>
          </ul>
          <div>
            <span>Third-Party Libraries Integration</span>
            <span>Test Driven Development (TDD)</span>
          </div>
        </li>
        <li className="project">
          <h3>
            Where's Waldo
            <div>Mar 2023 - Mar 2023</div>
          </h3>
          <p>
            A photo-tagging app based off of "Where's Waldo" game where the user
            has to find a character in an image. After finding all three
            characters, user has option to publish their time and view the
            scoreboard.
          </p>
          <a href="https://whereswaldo-29041.web.app/" target={"_blank"}>
            View App
          </a>
          <ul>
            <li>
              <img src={react} />
              <div className="imgName">React</div>
            </li>
            <li>
              <img src={firebase} />
              <div className="imgName">Firebase</div>
            </li>
            <li>
              <img src={octopus} />
              <div className="imgName">React Testing Library</div>
            </li>
          </ul>
          <div>
            <span>React State Management</span>
            <span> NoSQL Data Fetching</span>
          </div>
        </li>
        <li className="project">
          <h3>
            Shop
            <div>Feb 2023 - Mar 2023</div>
          </h3>
          <p>
            A modern climbing e-commerce platform for users to purchase a
            variety of products. The shop features a cart for users to check out
            their personalized items as well as item catergories.
          </p>
          <a href="https://shop-bc80d.web.app/" target={"_blank"}>
            View App
          </a>
          <ul>
            <li>
              <img src={react} />
              <div className="imgName">React</div>
            </li>
            <li>
              <img src={router} />
              <div className="imgName">React Router</div>
            </li>
            <li>
              <img src={octopus} />
              <div className="imgName">React Testing Library</div>
            </li>
          </ul>
          <div>
            <span>TDD</span>
            <span>React Router Navigation</span>
          </div>
        </li>
        <li className="project">
          <h3>
            Memory Card Game
            <div>Feb 2023 - Feb 2023</div>
          </h3>
          <p>
            A game where users have to click on all cards shown exactly once.
            After each click, cards are shuffled and users have to continue
            without clicking on a card previously clicked on. Characters are
            from popular cartoon anime "Bleach".
          </p>{" "}
          <a href="https://memorycard-4cda5.web.app/" target={"_blank"}>
            View App
          </a>
          <ul>
            <li>
              <img src={react} />
              <div className="imgName">React</div>
            </li>
            <li>
              <img src={js} />
              <div className="imgName">JavaScript</div>
            </li>
          </ul>
          <div>
            <span>React Lifecycle Methods</span>
            <span>React State Management</span>
          </div>
        </li>
        <li className="project">
          <h3>
            CV/Resume Creator
            <div>Feb 2023 - Feb 2023</div>
          </h3>
          <p>
            Creates a resume when a user inputs their information into a form.
            User can add multiple sections for each category such as work
            experience, education, etc. User has option to print resume when
            completed.
          </p>{" "}
          <a href="https://cv-app-8d5f4.web.app/" target={"_blank"}>
            View App
          </a>
          <ul>
            <li>
              <img src={react} />
              <div className="imgName">React</div>
            </li>
            <li>
              <img src={js} />
              <div className="imgName">JavaScript</div>
            </li>
          </ul>
          <div>
            <span>React Hooks {"&"} Props</span>
            <span>React State Management</span>
            <span>Input Handling</span>
          </div>
        </li>
        <li className="project">
          <h3>
            Battleship
            <div>Jan 2023 - Jan 2023</div>
          </h3>
          <p>
            A game of Battleship where the user hides a fleet of ships on a grid
            from the opponent (computer). The user must destroy the opposing
            ships before their own fleet is destroyed. Computer takes random
            shots each turn.
          </p>{" "}
          <a href="https://battleship-93658.web.app/" target={"_blank"}>
            View App
          </a>
          <ul>
            <li>
              <img src={react} />
              <div className="imgName">React</div>
            </li>
            <li>
              <img src={jest} />
              <div className="imgName">Jest</div>
            </li>
            <li>
              <img src={js} />
              <div className="imgName">JavaScript</div>
            </li>
          </ul>
          <div>
            <span> Object-Oriented Programming(OOP) Principles</span>
            <span>2D Arrays</span>
            <span>Unit Testing Basics</span>
          </div>
        </li>
        <li className="project">
          <h3>
            Knight Travails
            <div> Dec 2022 - Jan 2023</div>
          </h3>
          <p>
            An app that shows the shortest amount of moves it takes for a knight
            from popular game Chess to move to a given square. The amount of
            moves is indicated by a color transition rather than a numerical
            value.
          </p>{" "}
          <a href="https://knight-travails.web.app/" target={"_blank"}>
            View App
          </a>
          <ul>
            <li>
              <img src={react} />
              <div className="imgName">React</div>
            </li>
            <li>
              <img src={js} />
              <div className="imgName">JavaScript</div>
            </li>
          </ul>
          <div>
            <span>OOP</span>
            <span>2D Arrays</span>
            <span>
              Graph Data Structure {"&"} Breadth-First Search(BFS) Algorithm
            </span>
          </div>
        </li>
        <li className="project">
          <h3>
            Weather API
            <div>Dec 2022 - Dec 2022</div>
          </h3>
          <p>
            An app that shows a 3-day forecast of the weather using an API.
            Users can search up the weather by using their local city, state,
            postal code, or country.
          </p>{" "}
          <a href="https://weather-app-59fb5.web.app/" target={"_blank"}>
            View App
          </a>
          <ul>
            <li>
              <img src={js} />
              <div className="imgName">JavaScript</div>
            </li>
            <li>
              <img src={html} />
              <div className="imgName">HTML</div>
            </li>
            <li>
              <img src={css} />
              <div className="imgName">CSS</div>
            </li>
          </ul>
          <div>
            <span>API Data Fetching </span>
            <span>Data Handling {"&"} Management</span>
          </div>
        </li>
        <li className="project">
          <h3>
            Assignments
            <div>Dec 2022 - Dec 2022</div>
          </h3>
          <p>
            Created common data structures and algorithms such as linked list,
            binary tree, to merge sort. Also implemented common methods and
            traversals to each data structure.
          </p>
          <a href="https://github.com/BaoWoW123/Assignments" target={"_blank"}>
            View Code
          </a>
          <ul>
            <li>
              <img src={js} />
              <div className="imgName">JavaScript</div>
            </li>
          </ul>
          <div>
            <span>Data Structures {"&"} Algorithms</span>
            <span>Technical Skill Development</span>
          </div>
        </li>
        <li className="project">
          <h3>
            Restaurant Page
            <div>Nov 2022 - Nov 2023</div>
          </h3>
          <p>
            A restaurant webpage that displays their cuisine, address or
            location, contacts and other relevant information. Uses vanilla
            JavaScript {"&"} DOM manipulation to navigate pages.
          </p>{" "}
          <a href="https://restaurant-page-59a67.web.app/" target={"_blank"}>
            View App
          </a>
          <ul>
            <li>
              <img src={webpack} />
              <div className="imgName">Webpack</div>
            </li>
            <li>
              <img src={npm} />
              <div className="imgName">npm</div>
            </li>
            <li>
              <img src={js} />
              <div className="imgName">JavaScript</div>
            </li>
          </ul>
          <div>
            <span>ES6 Modules</span>
            <span>Document Object Model (DOM) Manipulation</span>
          </div>
        </li>
        <li className="project">
          <h3>
            Tic-Tac-Toe
            <div>Nov 2022 - Nov 2022</div>
          </h3>
          <p>
            A simple game of Tic-Tac-Toe where the user has to get three in a
            row of their letter. After each game, player's turns alternate
            allowing the opposing player to go first.
          </p>
          <a href="https://tic-tac-toe-40b13.web.app" target={"_blank"}>
            View App
          </a>
          <ul>
            <li>
              <img src={js} />
              <div className="imgName">JavaScript</div>
            </li>
            <li>
              <img src={html} />
              <div className="imgName">HTML</div>
            </li>
            <li>
              <img src={css} />
              <div className="imgName">CSS</div>
            </li>
          </ul>
          <div>
            <span>OOP</span>
            <span>JavaScript</span>
          </div>
        </li>
        <li className="project">
          <h3>
            Calculator
            <div>Oct 2022 - Oct 2022</div>
          </h3>
          <p>
            A calculator that solves basic math problems with the fundamental
            operators. The app stores the answer as the first operand and can be
            followed up with the remaining operator and number.
          </p>
          <a href="https://calculator-6fb2c.web.app" target={"_blank"}>
            View App
          </a>
          <ul>
            <li>
              <img src={js} />
              <div className="imgName">JavaScript</div>
            </li>
            <li>
              <img src={html} />
              <div className="imgName">HTML</div>
            </li>
            <li>
              <img src={css} />
              <div className="imgName">CSS</div>
            </li>
          </ul>
          <div>
            <span>JavaScript</span>
            <span>HTML {"&"} CSS</span>
          </div>
        </li>
        <li className="project">
          <h3>
            Admin Dashboard
            <div>Oct 2022 - Oct 2022</div>
          </h3>
          <p>
            A non-interactive admin dashboard that shows a modern page layout
            containing a navigation bar, body, header, etc.
          </p>
          <a href="https://admin-dashboard-2f01d.web.app" target={"_blank"}>
            View App
          </a>
          <ul>
            <li>
              <img src={html} />
              <div className="imgName">HTML</div>
            </li>
            <li>
              <img src={css} />
              <div className="imgName">CSS</div>
            </li>
          </ul>
          <div>
            <span>HTML</span>
            <span>CSS Grid</span>
          </div>
        </li>
        <li className="project">
          <h3>
            Signup Form
            <div>Oct 2022 - Oct 2022</div>
          </h3>
          <p>
            A basic form page for users to fill out information and submit. App
            uses common form related attributes such as fieldset, labels, input
            types, etc.
          </p>
          <a href="https://signup-form-469ed.web.app" target={"_blank"}>
            View App
          </a>
          <ul>
            <li>
              <img src={js} />
              <div className="imgName">JavaScript</div>
            </li>
            <li>
              <img src={html} />
              <div className="imgName">HTML</div>
            </li>
            <li>
              <img src={css} />
              <div className="imgName">CSS</div>
            </li>
          </ul>
          <div>
            <span>Form Attributes</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </li>
        <li className="project">
          <h3>
            Etch-A-Sketch
            <div>Aug 2022 - Sep 2022</div>
          </h3>
          <p>
            An app that lets users draw on a customizable grid. Features various
            modes; etch, erase, and off.
          </p>
          <a href="https://etch-a-sketch-d1b6d.web.app" target={"_blank"}>
            View App
          </a>
          <ul>
            <li>
              <img src={js} />
              <div className="imgName">JavaScript</div>
            </li>
            <li>
              <img src={html} />
              <div className="imgName">HTML</div>
            </li>
            <li>
              <img src={css} />
              <div className="imgName">CSS</div>
            </li>
          </ul>
          <div>
            <span>HTML</span>
            <span>CSS Flexbox</span>
            <span>JavaScript Basics</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
