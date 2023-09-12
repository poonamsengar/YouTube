import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { FaRegUser, FaRegEye, FaUserNinja, FaRedRiver } from "react-icons/fa";
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
  const navigate = useNavigate();
  const [visible, setvisivle] = useState(false)
  const [Confimvisible, setConfimVisivle] = useState(false)
 
  const [input, setInput] = useState({
    name: "",
    email: "",
    password:"",
    ConfimPassword:"",
  });
  const FormhandelSubmit = (e) => {
    e.preventDefault()
    const reg = /^[0-9A-Za-z]{5,16}$/

    if (!input.name) {
      toast.error('Fill the name ', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else if (!reg.test(input.name)) {
     
      toast.warn ('please insert [A-Z] [a-z] username ', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    if (!input.email) {
      toast.error('Fill the email ', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    else if (typeof input.email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input.email)) {
        toast.warn('Please enter valid email address.', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
    if (!input.password) {
      toast.error('fill the password!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });    
      }
   
    if (input.password)  {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;

      const uppercasePassword = uppercaseRegExp.test(input.password)
      const lowercasePassword = lowercaseRegExp.test(input.password)
      const digitsPassword = digitsRegExp.test(input.password );
      const specialCharPassword = specialCharRegExp.test(input.password );
      const minLengthPassword = minLengthRegExp.test(input.password );

        if (!uppercasePassword) {
          toast.warn('At least one Uppercase!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        } else if (!lowercasePassword) {
          toast.warn('At least one Lowercase!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        } else if (!digitsPassword) {
          toast.warn('At least one digit', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        } else if (!specialCharPassword) {
          toast.warn('At least one Special Characters', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        } else if (!minLengthPassword) {
          toast.warn('At least minumum 8 characters!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
        else{
          toast.success( 'All condition is Excepted!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
    }

    if (input.ConfimPassword )  {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;

      const uppercasePassword = uppercaseRegExp.test(input.ConfimPassword)
      const lowercasePassword = lowercaseRegExp.test(input.ConfimPassword)
      const digitsPassword = digitsRegExp.test(input.ConfimPassword );
      const specialCharPassword = specialCharRegExp.test(input.ConfimPassword );
      const minLengthPassword = minLengthRegExp.test(input.ConfimPassword );
     
      if (!uppercasePassword) {
        toast.warn('At least one Uppercase!', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      } else if (!lowercasePassword) {
        toast.warn('At least one Lowercase!', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      } else if (!digitsPassword) {
        toast.warn('At least one digit', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      } else if (!specialCharPassword) {
        toast.warn('At least one Special Characters', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      } else if (!minLengthPassword) {
        toast.warn('At least minumum 8 characters!', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
      else{
        toast.success( 'All condition is Excepted!', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    }

    if(input.ConfimPassword ==="") {
      toast.error('fill the Confirm password!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        }); 
      }
    else if(input.ConfimPassword !== input.password){
      toast.error('Password and confirm password does not match', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    else{
       swal("Good job!", "Congratulation you registered", "success");
       localStorage.setItem("user", JSON.stringify(input));
       navigate('/SignIn')
     }
  }
  return (
    <>
      <form onSubmit={FormhandelSubmit} className="form-Register">
        <div className="insideForm">
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
          {/* <p style={{ marginLeft: "2rem", color: "red" }}>{message}</p> */}
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
          {/* <p style={{ marginLeft: "2rem", color: "green" }}>{message}</p> */}
          <br />
          <label>Confirm password</label>
          <input
            className="insideInput"
            autoComplete="off"
            type={Confimvisible ? "text" : "password"}
            placeholder="Confirm password"
            name="ConfimPassword"
            value={input.ConfimPassword}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <span className="iconn" onClick={() => setConfimVisivle(!Confimvisible)}>
            {Confimvisible ? <FaRegEye /> : <FaRedRiver />}
          </span>
          {/* <p style={{ marginLeft: "2rem", color: "green" }}>{Confimmessage}</p> */}
          <br />
          <button type="submit" className="btn-Submit">Register</button>vv
          <a href="/SignIn" className="btn-logReg">if you are not logIn than click here</a>
        </div>
      </form>
      <ToastContainer />

      {/* <Toast/> */}
    </>
  );
};

export default Register;
