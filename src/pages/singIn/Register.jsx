import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { FaRegUser, FaRegEye, FaUserNinja, FaRedRiver } from "react-icons/fa";
import swal from 'sweetalert';

const Register = () => {
  const navigate = useNavigate();
  const [visible, setvisivle] = useState(false)
  const [Confimvisible, setConfimVisivle] = useState(false)

  const [message, setmessage] = useState('');
  const [input, setInput] = useState({
    name: "",
    email: "",
    password:"",
    ConfimPassword: "",
  }); 

 
  const FormhandelSubmit = (e) => {
    e.preventDefault();
   
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (input.password === "" ) {
      setmessage("please enter password");
    }
    else if (!regExp.test(input.password) || !regExp.test(input.ConfimPassword)) {
      setmessage("password not is valid");
    }
    else if (regExp.test(input.password) && regExp.test(input.ConfimPassword)) {
      setmessage("password is  valid");
      navigate("/SignIn");
      swal("Good job!", "Congratulation you registered", "success");

      localStorage.setItem("user",JSON.stringify(input));
    }
  };

  return (
    <form onSubmit={FormhandelSubmit} className="form-Registerr">
      <div className="insideFormm">
        <h1>SignUp</h1>

        <label>user name</label> <br />
        <input
          className="insideInput"
          autoComplete="off"
          type="text"
          placeholder="enter name"
          name="name"
          value={input.name}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <span className="iconn">
          <FaRegUser /> 
        </span>  
        {/* <p style={{marginLeft:"2rem", color: "red" }}>{message}</p> */}
        <br />
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
          <FaUserNinja />
        </span>
        {/* <p style={{marginLeft:"2rem", color: "red" }}>{message}</p> */}
        <br />
        <label>Enter Password</label>
        <br />
        <input
          className="insideInput"
          autoComplete="off"
          type={visible ? "text" : "password"}
          placeholder="Enter password"
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <span className="iconn" onClick={() => setvisivle(!visible)}>
          {visible ? <FaRegEye /> : <FaRedRiver />}
        </span>
      <p style={{marginLeft:"2rem", color: "red" }}>{message}</p>
        <br />
        <label>Confim password</label>
        <input
          className="insideInput"
          autoComplete="off"
          type={Confimvisible ? "text" : "password"}
          placeholder="Confim password"
          name="ConfimPassword"
          value={input.ConfimPassword}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <span className="iconn" onClick={() => setConfimVisivle(!Confimvisible)}>
          {Confimvisible ? <FaRegEye /> : <FaRedRiver />}
        </span>
        <p style={{marginLeft:"2rem", color: "red" }}>{message}</p>
        <br />
        <button type="submit" className="btn-Submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
