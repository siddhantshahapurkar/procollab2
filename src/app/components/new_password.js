import React from "react";

const New_password = () => {
  return (
    <div className="flex">
      <span className="w-3/5">
        <img className=" pt-8 procollabpic" src="navbar-brand.png" alt="" />
        <div className="newpassword">New Password</div>
        <div className="text5">
          Set the new password for your account so you can login.
        </div>
        <div className="enterpasstitle">Enter New Password</div>
        <div className="textboxdiv">
          <input
            className="enterpasstextbox"
            type="text"
            value="8 symbols atleast"
            name=""
            id=""
          />
        </div>
        <div className="enterpasstitle2">Confirm New Password</div>
        <div className="textboxdiv">
          <input
            className="enterpasstextbox"
            type="text"
            value="8 symbols atleast"
            name=""
            id=""
          />
        </div>
        <div className="updatediv">
          <button className="update">Update Password</button>
        </div>
      </span>
      <span className="w-2/5 right-side">
        <img className="sideimg" src="firstlogo.png" alt="" />
      </span>
    </div>
  );
};

export default New_password;
