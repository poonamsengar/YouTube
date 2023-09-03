import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
import {
  FaEye,
  FaLock, FaRegEye, FaUndo, FaUser
} from "react-icons/fa";


const Signup = () => {
  const navigate = useNavigate();
  const [visble, setvisble] = useState(false);
  const [input, setInput] = useState({
    name:"",
    email: "",
    password: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    if(input.email == "" && input.password == ""){
      alert("please filled the require data");
    }else{
      localStorage.setItem("user", JSON.stringify(input));
      navigate("/Login");
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
            type="name"
            placeholder="enter name"
            name="name"
            value={input.name}
            autoComplete="off"
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <br />
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
          <br />
          <FaLock className="lab" />
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
           <span className="iconn" onClick={()=>setvisble(!visble)}>
           {visble ? <FaRegEye />  : <FaLock/> } 
          </span>
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
