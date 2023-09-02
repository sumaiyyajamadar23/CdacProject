import react from "react";
import { Link } from "react-router-dom";
import AuthenticateService from "./AuthenticateService";
import "./header.css";
import { Clock, Grommet } from "grommet";

function Header() {
  const myStyle = {
    backgroundImage:
      "url('https://images.designtrends.com/wp-content/uploads/2015/11/30144027/Plain-Blue-Backgrounds1.jpg')",
    height: "10vh",
    marginTop: "0px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-5-strong " style={myStyle}>
        <div className="container  ">
          <a class="navbar-brand" href="/" onClick={AuthenticateService.logout}>
            <img
              src="https://onelittleproject.com/wp-content/uploads/2022/06/Pressed-Flower-Craft-600x500.jpg"
              alt="Loading..."
              width="40"
              height="30"
              class="rounded float-start d-inline-block align-text-top me-3"
            />
            <strong>ArtO'Craft</strong>
          </a>
          <strong>
            <Grommet>
              <Clock type="digital" />
            </Grommet>
          </strong>

          <button
            className="navbar-toggler rounded-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto data-toggle-pill">
              <li className="nav-item ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/terms-condition"
                >
                  <strong>Terms & Condition</strong>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="/">
                  <strong>Home</strong>
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://enam.gov.in/web/weather_forecast"
                >
                  <strong>Weather Forecast</strong>
                </a>
              </li> */}
              {(AuthenticateService.isUserLoggedIn() && sessionStorage.getItem("userType") === "admin") && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <strong>Register</strong>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/artist-reg">
                        <strong>Artist</strong>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/customer-reg">
                        <strong>Customer</strong>
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
              {!AuthenticateService.isUserLoggedIn() && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <strong>Login</strong>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink">
                    <li>
                      <Link className="dropdown-item" to="/artist-login">
                        <strong>Artist Login</strong>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/customer-login">
                        <strong>Customer Login</strong>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/admin-login">
                        <strong>Admin Login</strong>
                      </Link>
                    </li>
                  </ul>
                </li>
              )}

              {AuthenticateService.isUserLoggedIn() && (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/"
                    onClick={AuthenticateService.logout}
                  >
                    Logout
                  </a>
                </li>
              )}

              {sessionStorage.getItem("userType") === "customer" && (
                <li className="nav-item">
                  <a className="nav-link ms-3" href="/customer-myCart">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                      style={{ width: "30px", height: "30px" }}
                    ></img>
                    <span>My Cart</span>
                  </a>
                </li>
              )}

              {AuthenticateService.isUserLoggedIn() && (
                <li className="nav-item">
                  <a
                    className="nav-link ms-3"
                    href={"/" + sessionStorage.getItem("userType") + "/profile"}
                  >
                    <span>My Profile</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
