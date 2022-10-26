import "../Signup/signup.css";
import googleIcon from "../../Assets/google.png";
import githubIcon from "../../Assets/github.png";
import rightArrow from "../../Assets/right-arrow.png";

export default function Signup() {
  return (
    <div className="signup">
      <div className="signup_wrapper">
        <header>
          <h4>Welcome to NewsTime</h4>
          <p>Let's Login to see the trending news</p>
        </header>
        <form>
          <input type="text" placeholder="Email Address" />
          <br />
          <input type="password" placeholder="Password" />
          <div className="options">
            <span>Create Account</span>
            <span>Forgot Password?</span>
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
