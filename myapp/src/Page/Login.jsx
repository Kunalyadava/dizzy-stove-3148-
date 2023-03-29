import React, { useContext } from "react";
import styles from "./login.module.css";
import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Component/AppContext";
import Loading from "./Loading";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
const Login = () => {
  const { loginUser, isAuth } = useContext(AppContext);
  const [isLoading, setLoading] = useState(false);
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {     
      prompt("ENTER OTP");
       Swal.fire("Welcome!", "Registered successfully!","success");
      setLoading(false);
      loginUser(Name);
      console.log(Name);
      navigate("/Hotel");
    }, 1000);
  };
  const [isPageLoading, setPageIsLoading] = useState(true);
  setTimeout(() => {
    setPageIsLoading(false);
  }, 1000);
  if (isPageLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className={styles.main}>
        <div className={styles.submain}>
          <h1 style={{ fontWeight: "bold", fontSize:"40px" }}>Welcome to TripHub !</h1>
          <div style={{ width: "80%", margin: "auto" }}>
            <img
              style={{ width: "100%" }}
              src="http://bitly.ws/ChnJ"                                  
            />
          </div>
        </div>

        <div className={styles.loginmain}>
          <h2 style={{ fontWeight: "bold" }}>Log in / Sign up</h2>

          <input
            style={{
              width: "420px",
              height: "30px",
              borderRadius: "5px",
              textAlign: "center",
              fontSize: "15px",
              marginTop: "30px",
              border: "1px solid blue",
            }}
            id="mobile_number"
            name="name"
            placeholder="Enter Your Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            style={{
              width: "420px",
              height: "30px",
              borderRadius: "5px",
              textAlign: "center",
              fontSize: "15px",
              color: "black",
              marginTop: "30px",
              border: "1px solid blue",
            }}
            id="mobile_number"
            name="mobile"
            placeholder="Enter Mobile Number"
            value={Number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button
            style={{
              backgroundColor: "green",
              border: "none",
              color: " white",

              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "20px",
              fontWeight: "600",
              borderRadius: "5px",
              width: "420px",
              height: "45px",
              textTransform: "uppercase",
              marginTop: "10px",
            }}
            onClick={handleClick}
          >
            {!isLoading && "REGISTER"}
            {isLoading && (
              <Spinner
                thickness="4px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            )}
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>--------------</div>
            <p>{`  OR  `} </p>
            <div>--------------</div>
          </div>

          <button
            style={{
              backgroundColor: "white",
              color: " #6B6B6B",
              padding: "5px 40px 10px 40px",
              textAlign: "center",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "600",
              border: "1px solid black",
              borderRadius: "5px",
              margin: "10px",
              width: "377px",
            }}
            onClick={handleClick}
          >
            <img
              style={{
                width: "20px",
                margin: "0 15px 0px 15px",
                border: "2px solid greeen",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaAuJC3T4we7EMGLKHmlqoN960tceVmxPlfg&usqp=CAU"
              alt=""
            />
            CONTINUE WITH EMAIL
          </button>
          <div style={{ display: "flex" }}>
            <a
              href={`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Fheady%2drabbits%2d8947%2eherokuapp%2ecom%2Fusers%2Fauth%2Fgoogle%2Fcallback&client_id=${process.env.REACT_APP_GOOGLE_CLIENTID}&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email`}
            >
              <button
                style={{
                  backgroundColor: "white",
                  color: " #6B6B6B",
                  padding: "5px 40px 5px 30px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                  fontSize: "16px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "2px",
                }}
              >
                <img
                  style={{ width: "20px", margin: "0px 15px 0px 10px" }}
                  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                  alt=""
                />
                GOOGLE
              </button>
            </a>

            <a href="https://cdn-icons-png.flaticon.com/512/281/281764.png">
              <button
                style={{
                  backgroundColor: "white",
                  color: " #6B6B6B",
                  padding: "5px 25px 5px 20px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                  fontSize: "16px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "2px",
                }}
              >
                <img
                  style={{ width: "20px", margin: "0px 15px 0px 10px" }}
                  alt=""
                />
                FACEBOOK
              </button>
            </a>
          </div>
          <small style={{ textAlign: "center" }}>
            <p
              style={{
                width: "450px",
                height: "30px",
                margin: "auto",
                marginTop: "30px",
                color: "gray",
              }}
            >
              By creating an account or logging in, you agree with TripHub's
              <a
                style={{
                  textDecoration: "none",
                  color: "#1CB4C0",
                  fontWeight: "800",
                }}
                href="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;Terms and Conditions{" "}
              </a>
              and
              <a
                style={{
                  textDecoration: "none",
                  color: "#00AFAF",
                  fontWeight: "800",
                }}
                href="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;Privacy Policy
              </a>
              .
            </p>
          </small>
        </div>
      </div>
    </>
  );
};

export default Login;
