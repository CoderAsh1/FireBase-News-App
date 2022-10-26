import "../Signup/signup.css";
import googleIcon from "../../Assets/google.png";
import githubIcon from "../../Assets/github.png";
import rightArrow from "../../Assets/right-arrow.png";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="signup">
      <div className="signup_wrapper">
        <header>
          <h4>Welcome to NewsTime</h4>
          <p>Let's Login and see the trending news</p>
        </header>
        <form>
          <input type="text" placeholder="Email Address" />
          <br />
          <input type="password" placeholder="Password" />
          <div className="options">
            <Link to="/signup">
              <span>Create Account</span>
            </Link>
            <Link to="#">
              <span>Forgot Password?</span>
            </Link>
          </div>
          <button>Log In</button>
        </form>
        <div className="other_methods">
          <div>
            <img src={googleIcon} alt="googleIcon" width="18px" />
            <span>Log In with Google</span>
            <img src={rightArrow} alt="rightArrow" id="arrow" />
          </div>
          <div>
            <img src={githubIcon} alt="githubIcon" width="18px" />
            <span>Log In with Github</span>
            <img src={rightArrow} alt="rightArrow" id="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}
