import React from "react";
import { Link, withRouter } from "react-router-dom";
// import icon from './photo.png';
import Button from "@material-ui/core/Button";

function Navigation(props) {
  return (
    <div className="navigation">
      <div style={{ opacity: 0}} ></div>
      <nav className="py-1 navbar navbar-expand-sm" style={{backgroundColor:'pink' }}>
        <div className="container">
          <Link className="btn" to="/">  </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                  }`}
              >
                <Button
                  color="default"
                  //variant="contained"
                  size="small"
                >
                  <Link className="nav-link" to="/" style={{ color: "blue" }}>
                    Home 
                    <span className="sr-only">(current)</span>
                  </Link>
                </Button>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/feed" ? "active" : ""
                  }`}
              > <Button
                color="default"
                // variant="contained"
                size="small">
                  <Link className="nav-link" to="/feed" style={{ color: "blue" }} >
                    Feeds
                  </Link>
                </Button>
              </li>

              <li
                className={`nav-item  ${props.location.pathname === "/profile" ? "active" : ""
                  }`}
              >
                <Button
                  color="default"
                  size="small"
                >
                  <Link className="nav-link" to="/profile" style={{ color: "blue" }} >
                    My Profile
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </div>
  );
}

export default withRouter(Navigation);