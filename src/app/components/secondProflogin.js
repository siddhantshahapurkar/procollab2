import React from "react";

const Second = () => {
  return (
    <div className="flex">
      <span className="w-3/5">
        <img className=" pt-8 procollabpic" src="navbar-brand.png" alt="" />
        <div className="main_div">
          <div className="logintext">Login</div>
          <div>
            <div className="emailtext">E-mail Address</div>
            <div className="emaildiv">
              <input className="emailbtn" type="text"></input>
            </div>
          </div>
          <div>
            <div className="emailtext">Password</div>
            <div className="emaildiv">
              <input className="emailbtn" type="text"></input>
            </div>
          </div>
          <div className="div1">
            <div className="checkboxdiv">
              <input className="checkbox" type="checkbox" name="" id="" />
            </div>
            <div className="remember">Remember Me</div>
            <div className="reset">Reset Password?</div>
          </div>
          <div className="signindiv">
            <button className="signinbtn" type="submit">
              Sign In
            </button>
          </div>
          <div>
            <div className="or">or</div>
            <div className="pt-10">
              <img className="googleimg" src="search.png" alt="" />
            </div>
          </div>
        </div>
      </span>
      <span className="w-2/5 right-side">
        <img className="sideimg" src="firstlogo.png" alt="" />
      </span>
    </div>
  );
};

export default Second;
