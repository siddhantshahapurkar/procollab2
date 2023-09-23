import Image from "next/image";
import First from "./components/first";
import Second from "./components/secondProflogin";
import Forgot_pass from "./components/forgot_pass";
import New_password from "./components/new_password";
import Reset_page from "./components/reset_page";
import Successful_pass_reset from "./components/successful_pass_reset";
import Registerprof1 from "./components/registerprof1";
import Welcomeprofpage from "./components/welcomeprofpage";

export default function Home() {
  return (
    <>
      <First />
      <Second />
      <New_password />
      <Reset_page />
      <Forgot_pass />
      <Successful_pass_reset />
      <Registerprof1 />
      <Welcomeprofpage />
    </>
  );
}
