import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
import {
  FaEye,
  FaLock, FaUndo, FaUser
} from "react-icons/fa";


const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    if(input.email == "" && input.password == ""){
      alert("please filled the require data");
    }else{
      localStorage.setItem("user", JSON.stringify(input));
      navigate("/");
    }
   
  };
  return (
    <div className="App">
      <form onSubmit={handelSubmit} className="formRegister">
        <h1>Register</h1>
        <div className="insideDiv">
          <FaUser className="lab" />
          <input
            className="inputBox"
            type="email"
            placeholder="enter email"
            name="email"
            value={input.email}
            autoComplete="off"
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <FaUndo className="IconRight" />
          <br />
          <FaLock className="lab" />
          <input
            className="inputBox"
            type="password"
            placeholder="enter password"
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <FaEye className="IconRight" />
        </div>
        <br />
        <button className="btn" type="submit">
          Register
        </button>
        <Link to="/Signup" className="Lin">
          {"  "}
          <u className="btn">Login</u>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
