import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function ForgotPassword() {
    return (
      <div className="all">
        <div className='auth'>
          <div className='bg'>
            <h1>Recover your account!</h1>
          </div>
          <div className='lg'>
            <div className='title'>
              <h1>Forgot your password?</h1>
              <p>Enter your registered email to be able to change your password</p>
            </div> 
            <form>
              <label>
                <label>
                  <Input field={'Email'} type={'text'}/>
                </label>
              </label>
              <label>
                <Button text={'Send'}/>
              </label>
              <label className="sign">
                Return to  <Link to="/" className="link">Login</Link>
              </label>             
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default ForgotPassword;