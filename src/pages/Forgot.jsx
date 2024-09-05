import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { auth } from "../services/firebaseConfig";

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  async function handleForgot(e) {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email)
    } catch (error) {
      alert(error.code, error.message)
    }
  } 

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
                  <Input field={'Email'} type={'text'} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                {errorMessage && <p className="error">{errorMessage}</p>}
              </label>
              <label>
                <Button text={'Send'} onClick={handleForgot}/>
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