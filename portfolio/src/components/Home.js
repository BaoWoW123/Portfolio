import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="homeMain">
        <div className="homeTitle">Welcome!</div>
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
      <div className="homeContent"></div>
    </div>
  );
};

export default Home;
