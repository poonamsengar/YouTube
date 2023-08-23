import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
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
  };
  return (
    <form onSubmit={handelLogin}>
      <label>user email</label> <br />
      <input
        type="email"
        placeholder="enter email"
        name="email"
        value={input.email}
        onChange={(e) =>
          setInput({ ...input, [e.target.name]: e.target.value })
        }
      />
      <br />
      <label>user password</label>
      <br />
      <input
        type="password"
        placeholder="enter password"
        name="password"
        value={input.password}
        onChange={(e) =>
          setInput({ ...input, [e.target.name]: e.target.value })
        }
      />
      <br />
      <button type="submit">Login</button>
      <Link to ="/Signup"> <u>Register</u></Link>
    </form>
  );
};

export default Login;
