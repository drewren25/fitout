
import Search from "./Search";

function Nav() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        fitout
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/">
            Home
          </a>
          <a className="nav-item nav-link" href="/All_Meets">
            All Meets
          </a>
          <a className="nav-item nav-link" href="/About">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
