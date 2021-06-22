import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Disclaimer from "./screens/Disclaimer";
import FAQS from "./screens/FAQS";
import HomeScreen from "./screens/HomeScreen";
import Landing from "./screens/Landing";
import productScreen from "./screens/productScreen";
import RefundPolicy from "./screens/RefundPolicy";
import Signin from "./screens/Signin";
import logob from "./Assets/Images/logob.png";
import logo from "./Assets/Images/logo.png";
import cup from "./Assets/Images/cup.png";
import Admin from "./screens/admin";
import downline from "./screens/downline";
import homeicon from "./Assets/Images/home.png";
import profileIcon from "./Assets/Images/profile.png";
import cart from "./Assets/Images/cart.png";
import credit from "./screens/credit";
import comingsoon from "./screens/comingsoon";
import updateProfile from "./screens/updateProfile";
import submitBankDetails from "./screens/submitBankDetails";
import Payment from "./screens/payment";
import LazyLoad from 'react-lazyload';
import instaicon from './Assets/Images/instagram.svg';
import Aboutus from "./screens/aboutus";
import Blogs from "./screens/Blogs";
import posts from "./screens/posts";
import createCourse from "./screens/CreateCourse";
import AvailableCourses from "./screens/availableCourse";
import kunalMentorship from "./screens/kunalMentorship";

function App(props) {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header style={{ position: "fixed", width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {" "}
            <a className="mob-header-item" href="/signin">
              <img src={profileIcon} alt="BRACTUS" width="19px" style={{marginTop:'10px'}} />
            </a>
            <a className="mob-header-item" href="/">
              <img
                src={logob}
                alt="BRACTUS"
                width="60px"
                style={{ marginLeft: "17px" }}
              />
            </a>
            <div
              className="hambergerIcon"
              id="hambergerIconId"
              onClick={() => {
                if (document.getElementById("mobile").style.top == "-110vh") {
                  document.getElementById("hambergerIconId").style.margin =
                    "23px";
                  document.getElementById("mobile").style.top = "0px";
                  document.getElementById("mobile").style.transition = "0.5s";
                  document.getElementById("hamb1").style.transform =
                    "rotate(-50deg)";
                  document.getElementById("hamb2").style.transform =
                    "rotate(50deg)";
                  document.getElementById("hamb2").style.transition = "1s";
                  document.getElementById("hamb1").style.transition = "1s";
                  document.getElementById("hamb1").style.margin = 0;
                  document.getElementById("hamb2").style.margin = 0;
                } else {
                  document.getElementById("hambergerIconId").style.margin =
                    "10px";
                  document.getElementById("mobile").style.top = "-110vh";
                  document.getElementById("mobile").style.transition = "1s";
                  document.getElementById("hamb1").style.transform =
                    "rotate(0deg)";
                  document.getElementById("hamb2").style.transform =
                    "rotate(0deg)";
                  document.getElementById("hamb2").style.transition = "1s";
                  document.getElementById("hamb1").style.transition = "1s";
                  document.getElementById("hamb1").style.margin = "10px";
                  document.getElementById("hamb2").style.margin = "10px";
                }
              }}
            >
              <div
                id="hamb1"
                className="hamb"
                style={{
                  minWidth: "15px",
                  minHeight: "0.01rem",
                  backgroundColor: "#fff",
                  margin: "10px",
                }}
              ></div>
              <div
                id="hamb2"
                className="hamb"
                style={{
                  minWidth: "15px",
                  minHeight: "0.01rem",
                  backgroundColor: "#fff",
                  margin: "10px",
                }}
              ></div>
            </div>
            <div className="nav-for-mobile" id="mobile">
              {/* <div className="mobile-nav-header">
            <a className="mob-header-item" href="/Packages">
                <img src={cart} alt="BRACTUS" width="30px" />
              </a>
              <a className="mob-header-item"  href="/">
                <img src={logo} alt="BRACTUS" width="70px" />
              </a>
            </div> */}

            
              <a href="/aboutus">Know Us</a>

              <a href="/comingsoon">Events</a>
              <a href="/Packages">Services</a>
              <a href="/comingsoon">Leaderboard</a>
              <a href="/signin">My Account</a>
              {/* <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a> */}
            </div>
          </div>

          <div className="nav-for-desktop">
            <a href="/">
              <img
                style={{ padding: 0, marginTop: 20 }}
                width="100px"
                src={logo}
              ></img>
            </a>

            <a href="/aboutus">Know Us</a>
            <a href="/comingsoon">Events</a>

            <a href="/comingsoon">Leaderboard</a>

            <a href="/Packages">
              <img
                style={{ padding: 0, margin: 0 }}
                width="25px"
                src={cart}
              ></img>
            </a>
            <a href="/signin">
              <img
                style={{ padding: 0, margin: 0 }}
                width="18px"
                src={profileIcon}
              ></img>
            </a>
            {/* <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a> */}
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={productScreen}></Route>
          <Route path="/Packages" component={HomeScreen} exact></Route>
          <Route path="/" component={Landing} exact></Route>
          <Route path="/Credit" component={credit} exact></Route>
          <Route path="/kunalMentorship" component={kunalMentorship}></Route>
          <Route
            path="/Admin485vb98563vb359bv69485658b598cjhfsdfj"
            component={Admin}
          ></Route>
          
          <Route path="/submitBankDetails" component={submitBankDetails}></Route>
          <Route path="/Downline" component={downline}></Route>
          {localStorage.getItem("isLoggedIn") == "true" ? (
            <Route path="/signin" component={Dashboard} exact></Route>
          ) : (
            <Route path="/signin" component={Signin} exact></Route>
          )}

{localStorage.getItem("isLoggedIn") == "true" ? (
            <Route path="/publishBlog" component={Blogs}></Route>
          ) : null}
  <Route path="/Payment" component={Payment} exact></Route>
          <Route path="/FAQS" component={FAQS} exact></Route>
          <Route path="/comingsoon" component={comingsoon} exact></Route>
          <Route path="/aboutus" component={Aboutus} exact></Route>
          <Route path="/Disclaimer" component={Disclaimer} exact></Route>
          <Route path="/RefundPolicy" component={RefundPolicy} exact></Route>
          <Route path="/updateProfile" component={updateProfile} exact></Route>
          {/* <Route path="/Signin" component={Signin} exact></Route> */}
          <Route path="/Dashboard" component={Dashboard} exact></Route>
          {/* <Route path="/blogs" component={posts}></Route> */}
          {/* <Route path="/CreateCourse" component={createCourse}></Route> */}
          <Route path="/availableCourses" component={AvailableCourses}></Route>
          <Route path="/CreateCourse" component={createCourse}></Route>
      
        </main>

        <footer>
          <div className="footer">
            <ul className="footer-ul">
              <h1>Disclaimer</h1>
              <p style={{ lineHeight: "25px", lineBreak: "auto" }}>
                Bractus offers you a beautiful and an organized platform of
                earning while learning through our e-trainings and Skill-training
                based program. We don't charge you any amount to be a part of
                our ecosystem, the amount you may pay for the mentors, guidance and
                the resourses you are getting from Bractus.
              </p>
            </ul>
            <ul className="footer-ul">
              <h1>Get In Touch</h1>
              <li>Email: bractusIndia@gmail.com</li>
              <li style={{ lineHeight: "25px", lineBreak: "auto" }}>
              Contact: BRACTUS
              </li>
              <li>
              Founder's handle: <br></br>
             
              
              <a href="https://www.instagram.com/_kunal.khanna_/"><img src={instaicon} width="15px" alt="Kunal Khanna"></img> Kunal khanna</a> <br></br>
           <br></br>
             {/* <a href="https://www.instagram.com/aakash._.bhardwaj/"><img src={instaicon} width="15px" alt="Aakash Bhardwaj" /> Aakash bhardwaj</a>  */}

              </li>
            </ul>
            <ul className="footer-ul">
              <h1>Information</h1>
              <li>
                <a href="/FAQS">Terms & Conditions</a>
              </li>
              <li>
                <a href="/RefundPolicy">Refund Policy</a>
              </li>
              <li>
                <a href="/Disclaimer">Disclaimer</a>
              </li>
              <li>
                <a href="/aboutus">About Us</a>
              </li>
              <li>
                <a href="/blogs">Bractus Blogs</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 style={{ display: "flex", justifyContent: "center" }}>
              2021 Bractus All Rights Reserved{" "}
            </h3>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;