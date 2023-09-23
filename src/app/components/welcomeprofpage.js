import React from "react";

const Welcomeprofpage = () => {
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
        <div className="maindiv1 pt-10">
          <div className="wel_pro">Welcome Prof.</div>
          <div className="regacc">Complete your Profile</div>
          <div className="flex pb-5">
            <span className="pr-5">
              <div className="title">Select your Department</div>
              <div>
                <input
                  className="textbox2"
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
              <div className="title">Add Specilisation</div>
              <div>
                <input
                  className="textbox2"
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
              <div className="title">Research Interest Areas</div>
              <div>
                <input
                  className="textbox2"
                  type="text"
                  name=""
                  id=""
                  value=""
                />
              </div>
            </span>
          </div>
          <div className="pt-3">
            <div className="createaccdiv">
              <button className="createacc">Proceed</button>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Welcomeprofpage;
