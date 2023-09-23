import React from "react";

const Registerprof1 = () => {
  return (
    <div className="flex">
      <span className="w-2/5 lefty">
        <div className="main_div3">
          <div className="collab_plat">
            Collaboration <tr />
            Platform
          </div>
          <div className="whiteline"></div>
          <div className="text-7">Find new Projects easily.</div>
        </div>
      </span>
      <span className="w-3/5">
        <div className="maindiv1">
          <div className="wel_pro">Welcome to ProCollab</div>
          <div className="regacc">Register your account</div>
          <div className="flex pb-5">
            <span className="pr-5">
              <div className="title">First Name</div>
              <div>
                <input
                  className="textbox1"
                  type="text"
                  name=""
                  id=""
                  value=""
                />
              </div>
            </span>
            <span>
              <div className="title">Last Name</div>
              <div>
                <input
                  className="textbox1"
                  type="text"
                  name=""
                  id=""
                  value=""
                />
              </div>
            </span>
          </div>
          <div className="flex pb-5">
            <span className="pr-5">
              <div className="title">E-mail Address</div>
              <div>
                <input
                  className="textbox1"
                  type="text"
                  name=""
                  id=""
                  value=""
                />
              </div>
            </span>
            <span>
              <div className="title">Phone Number</div>
              <div>
                <input
                  className="textbox1"
                  type="text"
                  name=""
                  id=""
                  value=""
                />
              </div>
            </span>
          </div>
          <div className="flex">
            <span className="pr-5">
              <div className="title">Password</div>
              <div>
                <input
                  className="textbox1"
                  type="text"
                  name=""
                  id=""
                  value=""
                />
              </div>
            </span>
            <span>
              <div className="title">Confirm Password</div>
              <div>
                <input
                  className="textbox1"
                  type="text"
                  name=""
                  id=""
                  value=""
                />
              </div>
            </span>
          </div>
          <div className="pt-8 flex ">
            <input className="checkbox1 pr-3" type="checkbox" name="" id="" />
            <div className="greytext pl-3">
              I agree to all the{" "}
              <span className="bluetext">Terms, Privacy Policy</span>
            </div>
          </div>
          <div>
            <div className="createaccdiv">
              <button className="createacc">Create Account</button>
            </div>
          </div>
          <div className="pt-5">
            Already have an account?{" "}
            <span className="bluetext font-semibold">Log In</span>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Registerprof1;
