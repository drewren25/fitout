function Footer() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light footer">
      <a className="navbar-brand" href="#">
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
      <div className="collapse navbar-collapse footer-nav" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#">
            Contact
          </a>
          <a className="nav-item nav-link" href="#">
            FAQ
          </a>
          <a className="nav-item nav-link" href="#">
            How it works
          </a>
          <a className="nav-item nav-link" href="#">
            About
          </a>
        </div>
      </div>
      <a href="https://www.instagram.com/andrewrennnn/?hl=en" target="_blank">
        <i className="bi bi-instagram fs-4"></i>
      </a>
    </nav>
  );
}

export default Footer;
