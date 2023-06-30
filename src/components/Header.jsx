import "./styles/header.css";
import linkedinIcon from "../assets/linkedin-icon.png";
import githubIcon from "../assets/github-icon.png";

function Header() {
  return (
    <header>
      <div className="name-header">
        <h1>Make History</h1>
        <h2>Coded by Ramón Viqueira</h2>
      </div>
      <div className="message-header">
        <p>
          Esta aplicación es una demo, podría contener fallos. This application
          is a demo, it may contain bugs.
        </p>
      </div>
      <nav className="cont-nav">
        <a
          href="https://www.linkedin.com/in/ramon-viqueira/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" className="icon" />
        </a>

        <a
          href="https://github.com/nyxelviqueira"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="Github" className="icon" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
