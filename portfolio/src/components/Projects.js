import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="Projects">
      <ul className="projectsList">
        <li className="project">
          <h3>
            Itstagram
            <div> Mar 2023 - Present</div>
          </h3>
          <p>
            An Instagram clone with the essential features of the original
            platform. Users can change their profile image, create posts as well
            as comment on other posts. Users can create a new profile, login
            with Google, or sign in with a test account.
          </p>{" "}
          <a href="https://instagramclone-f3e9c.web.app/">View App</a>
          <ul>
            <li>React</li>
            <li>Google Firebase</li>
            <li>Third-party libraries integration</li>
            <li>Test driven development (TDD)</li>
          </ul>
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
          <a href="https://whereswaldo-29041.web.app/">View App</a>
          <ul>
            <li>Google Firebase</li>
            <li>NoSQL</li>
          </ul>
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
          <a href="https://shop-bc80d.web.app/">View App</a>
          <ul>
            <li>TDD</li>
            <li>React</li>
            <li>React Router</li>
          </ul>
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
          <a href="https://memorycard-4cda5.web.app/">View App</a>
          <ul>
            <li>React Lifecycle Methods</li>
            <li>React State Management</li>
            <li></li>
          </ul>
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
          <a href="https://cv-app-8d5f4.web.app/">View App</a>
          <ul>
            <li>React Hooks</li>
            <li>React Props</li>
            <li>React State Management</li>
            <li>Input Handling</li>
          </ul>
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
          <a href="https://battleship-93658.web.app/">View App</a>
          <ul>
            <li>OOP</li>
            <li>2D Arrays</li>
            <li>Babel</li>
            <li>React</li>
          </ul>
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
          <a href="https://knight-travails.web.app/">View App</a>
          <ul>
            <li>
              {" "}
              Graph data structure & breadth-first search (BFS) algorithm
            </li>
            <li>2D Arrays</li>
            <li>Object-oriented programming (OOP)</li>
          </ul>
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
          <a href="https://weather-app-59fb5.web.app/">View App</a>
          <ul>
            <li>API Data Fetching & Management</li>
          </ul>
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
          <a href="https://github.com/BaoWoW123/Assignments">View Code</a>
          <ul>
            <li>Data structures and algorithms</li>
            <li>JavaScript</li>
          </ul>
        </li>
        <li className="project">
          <h3>
            Restaurant Page
            <div>Nov 2022 - Nov 2023</div>
          </h3>
          <p>
            A restaurant webpage that displays their cuisine, address or
            location, contacts and other relevant information. Uses vanilla
            JavaScript & DOM manipulation to navigate pages.
          </p>{" "}
          <a href="https://restaurant-page-59a67.web.app/">View App</a>
          <ul>
            <li>Webpack</li>
            <li>ES6 Modules</li>
            <li>Document Object Model(DOM) Manipulation</li>
          </ul>
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
          <a href="https://tic-tac-toe-40b13.web.app">View App</a>
          <ul>
            <li>OOP</li>
            <li>JavaScript</li>
          </ul>
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
          <a href="https://calculator-6fb2c.web.app">View App</a>
          <ul>
            <li>JavaScript Basics</li>
            <li>HTML & CSS</li>
          </ul>
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
          <a href="https://admin-dashboard-2f01d.web.app">View App</a>
          <ul>
            <li>HTML</li>
            <li>CSS Grid</li>
          </ul>
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
          <a href="https://signup-form-469ed.web.app">View App</a>
          <ul>
            <li>HTML Form Attributes</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
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
          <a href="https://etch-a-sketch-d1b6d.web.app">View App</a>
          <ul>
            <li>HTML</li>
            <li>CSS Flexbox</li>
            <li>JavaScript Basics</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
