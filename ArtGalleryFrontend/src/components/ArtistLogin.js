import react from "react";
import { useState } from "react";
import AuthenticateService from "./AuthenticateService";
import axios from "axios";
import { useEffect } from "react";
import { Alert, AlertTitle } from "@mui/material";

function ArtistLogin() {
  const myStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1630002931917-964ccb95d0a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFydCUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D&w=1000&q=80')",
    height: "100vh",
    marginTop: "0px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  let [iserror, setIserror] = useState(false);
  // useEffect(() => {
  //   AuthenticateService.logout();
  // });

  var [login, setLogin] = useState({ user_name: "", password: "" });

  // var [hasLoginFailed, sethasLoginFailed] = useState(false);
  var handleChange = (e) => {
    e.preventDefault();
    var name = e.target.name;
    var value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  console.log(login);
  var onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9099/artist/login", {
        password: login.password,
        user_name: login.user_name,
      })
      .then((response) => {
        console.log(response.data);

        if (response.data === "pass")
       {
          AuthenticateService.artistLogin(login.user_name);
          setLogin({ user_name: "", password: "" });
          window.location = `/artist-welcome/${login.user_name}`;
        } 
        else 
        {
          console.log(login.user_name);
          // sethasLoginFailed(true);
          setLogin({ user_name: "", password: "" });
          //alert("Invalid Password/Username");
          setIserror(true);
          setTimeout(() => setIserror(false), 2500)
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <>
      <div className="container-fluid" style={myStyle}>
        <div className="row rounded">
          <div className="col-md-4 offset-md-4 ">
            <div
              className="login-form bg-light mt-4 p-4 "
              style={{ borderRadius: "30px" }}
            >
              <form onSubmit={onSubmit} className="row g-3">
                <h4 className="text-center">Artist-Login</h4>

                <div className="col-12 d-flex flex-row">
                  <img
                    className="mt-2 me-2"
                    src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
                    style={{ height: "20px", width: "20px" }}
                  ></img>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    placeholder="Username"
                    value={login.user_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 d-flex flex-row">
                  <img
                    className="mt-2 me-2"
                    src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"
                    style={{ height: "20px", width: "20px" }}
                  ></img>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={login.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 text-center">
                  <button type="submit" class="btn btn-dark ">
                    Login
                  </button>
                </div>
              </form>
              <hr className="mt-4" />
              <div className="col-12">
                <p className="text-center mb-0">
                  Have not account yet? <a href="/artist-reg">Sign-up</a>
                </p>
                <p className="text-center mb-0">
                  <a href="/forgot-password">Forgot password?</a>
                </p>
              </div>
              {iserror &&
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  Invalid username/password — <strong>check it out!</strong>
                </Alert>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistLogin;
