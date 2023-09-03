import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
import {
  FaEye,
  FaLock,FaRegEye,FaRegUser,FaUndo, FaUser
} from "react-icons/fa";

const Login = () => {
  const [visble, setvisble] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handelLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("Email and Password incorrect");
    }
    console.log(loggedUser);
  };
  return (
    <div className="App">
    <form onSubmit={handelLogin} className="formRegister">
      <h1>LogIn</h1>
      <div className="insideDiv">
        <FaUser className="lab"/>
        <input
          className="inputBox"
          type="email"
          placeholder="enter email"
          name="email"
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <br/>
        <FaLock className="lab"/>
        <input
          className="inputBox"
          type={visble ? "text" : "password"}
          placeholder="enter password"
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
          <span className="icon" onClick={()=>setvisble(!visble)}>
           {visble ? <FaRegEye />  : <FaLock/> } 
          </span>
        <FaEye className="IconRight"/>
      </div>

      <br />

      <button className="btn" type="submit">Login</button>
      <Link to="/Signup"  className="Lin">
        {"  "}
        <u  className="btn">Register</u>
      </Link>
    </form>
    </div>
  );
};

export default Login;
