import "../styles/Home.css";
import react from '../assets/logos/react.png'
import js from '../assets/logos/js.png'
import jest from '../assets/logos/jest.png'
import git from '../assets/logos/git.png'
import router from '../assets/logos/router.png'
import github from '../assets/logos/github.png'
import webpack from '../assets/logos/webpack.png'
import npm from '../assets/logos/npm.png'
import tailwind from '../assets/logos/tailwind.png'
import avatar from '../assets/avatar.png'

const Home = () => {
  return (
      <div className="Home">
      <div className="homeMain">
        <div className="homeTitle">
            <div><img src={avatar}/></div>
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
        <div>Home Content Here</div>
        <ul className="skillSet">
            <li><img src={react}/></li>
            <li><img src={js}/></li>
            <li><img src={router}/></li>
            <li><img src={jest}/></li>
            <li><img src={git}/></li>
            <li><img src={github}/></li>
            <li><img src={webpack}/></li>
            <li><img src={npm}/></li>
            <li><img src={tailwind}/></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
