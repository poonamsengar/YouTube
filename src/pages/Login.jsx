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
    <form onSubmit={handelLogin} className="bg-red-400 h-screen relative" > 
      <p className="text-red-400 text-center text-[80px] sm:text-[2rem]">LogIn</p>
      <div className=" relative w-[50rem] sm:w-[32rem] bg-blue-600 sm:m-24 sm:p-28 md:m-24 md:p-32 md:w-[37rem] lg:w-[50rem]  xl:w-[65rem] xl:h-[40rem] 2xl:w-[50rem] 2xl:h-[30rem] 2xl:ml-[25rem]" > 
        <FaUser className="absolute sm:left-10 sm:top-[rem]  text-4xl md:top-[8rem] md:left-14 md:bottom-72 lg:top-[2]  xl:text-[50px]  2xl:text-[25px] 2xl:ml-[3rem] " /> 
        <input
          className="relative    p-4 w-[20rem]  md:w-96 md:right-5  lg:w-[35rem] xl:w-[770px] xl:h-[85px] xl:ml-[3rem] 2xl:h-[3rem] 2xl:w-[35rem]" 
          type="email"
          placeholder="enter email"
          name="email" 
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        /> 
        <br/> 
        <br/>
        <FaLock className="absolute sm:left-10 sm:top-22 md: text-2xl md:left-14 md:top-[13rem]  lg:top-[2]  xl:text-[60px]  xl:top-[16rem] 2xl:text-[25px]  2xl:ml-[3rem]  2xl:mt-[-3rem]"/>
        <input
          className="relative p-4 w-80  md:w-96 md:right-5 lg:w-[35em] xl:w-[770px] xl:h-[85px] xl:ml-[3rem] 2xl:h-[3rem] 2xl:w-[35rem]" 
          type={visble ? "text" : "password"}
          placeholder="enter password"
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value }) 
          } 
        />
          <span className=" absolute right-20 top-40 sm:mt-[3rem] sm:mr-[1rem] md:mr-10 md:mt-[4rem]  lg:right-[8rem]  text-2xl lg:top-[10rem] xl:mr-[2rem] xl:mt-[6rem] 2xl:mt-[3rem] 2xl:ml-[3rem]"  onClick={()=>setvisble(!visble)}> 
           {visble ? <FaRegEye  />  : <FaLock/> } 
          </span>
      </div>

      <br />

      <button className="absolute bg-red-300 w-44 text-amber-50  text-2xl  sm:top-[26rem] sm:left-[13rem] sm:w-[10rem]  md:top-[28rem]  h-12 md:left-56 tracking-wide	 lg:left-80  xl:top-[33rem] xl:w-[20rem] xl:h-[6rem] 2xl:w-[15rem] 2xl:h-[3rem] 2xl:ml-[20rem] 2xl:mt-[-6rem]" type="submit">Login</button>
      <Link to="/Signup"  className="Lin">
        {"  "}
        <u  className="absolute w-48 sm:top-[26rem] sm:left-[23rem] sm:w-[9.8rem] md:top-[28rem]  h-12 md:left-96 bg-red-600 text-center text-amber-50 tracking-wide items-center	text-2xl  lg:ml-28 xl:left-[35rem] xl:top-[33rem] xl:w-[20rem] xl:h-[6rem] 2xl:h-[3rem] 2xl:mt-[-6rem] 2xl:w-[8rem] 2xl:ml-[20rem]">Register</u>
      </Link>
    </form> 
    </div> 
  );
};

export default Login;
