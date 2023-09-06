import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
import {
  FaRegUser,
  FaRegEye,
  FaRedRiver,
} from "react-icons/fa";
import swal from 'sweetalert';


const SignIn = () => {
  const [visible, setvisivle] = useState(false);

  const [input, setInput] = useState({
    email: "",
    password: ""
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
      swal("Good job!", "Congratulation you Login", "success");
    } 
     else {
      swal("please insert info !", "", "warning");
    }
  };

  return (
    <form onSubmit={handelLogin} className="form-Register">
      <div className="insideForm">
        <h1>SignIn</h1>
        <label>user email</label> <br />
        <input
          className="insideInput"
          autoComplete="off"
          type="email"
          placeholder="enter email"
          name="email"
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <span className="iconn">
          <FaRegUser />
        </span>
        <br />
        <label>Enter password</label>
        <br />
        <input
          className="insideInput"
          type={visible ? "text" : "password"}
          placeholder="enter password"
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <span className="iconn" onClick={() => setvisivle(!visible)}>
          {visible ? <FaRegEye /> : <FaRedRiver />}
        </span>
        <br />        
        <button type="submit" className="btn-Submit">
          Login
        </button>
        <Link to="/Register" className="reg">
          <u >Register</u>
        </Link>
      </div>
    </form>
  );
};

export default SignIn;
