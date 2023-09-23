import React from "react";

const Successful_pass_reset = () => {
  return (
    <div className="flex">
      <span className="w-3/5">
        <img className=" pt-8 procollabpic" src="navbar-brand.png" alt="" />
        <div className="main_div">
          <div className="main_div2">
            <div className="uploadimgdiv">
              <img className="uploadimg" src="upload.png" alt="" />
            </div>
            <div className="Successfully flex justify-center">Successfully</div>
            <div className="text-6 flex justify-center">
              Your password has been reset successfully
            </div>
            <div className="continuediv flex justify-center pt-3">
              <button className="continue">Login</button>
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

export default Successful_pass_reset;
