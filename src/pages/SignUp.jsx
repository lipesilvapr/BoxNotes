import Input from '../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Logo from '../img/icons8-lápis-96.svg';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { auth } from '../services/firebaseConfig';
import { updateProfile } from 'firebase/auth';
import Loading from './Loading';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  async function handleSignUp(e) {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email.');
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage('The password must be at least 6 characters long.');
      return;
    }

    if (!validateConfirmPassword(password, confirmPassword)) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    
    try {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      navigate("/app"); 
    } catch (error) {
      setErrorMessage('Error creating account. Please try again.');
    }
    
  }

  if (loading) {
    return <Loading/>
  }
    return (
      <div className="all">
        <div className='auth'>
          <div className='bg'>
            <img src={Logo} id='logoLogin'/>
            <h1>Create your account!</h1>
          </div>
          <div className='lg'>
            <div className='title'>
              <h1>Sign Up</h1>
              <p>Enter your details to create!</p>
            </div> 
            <form>
              <label>
                <label>
                  <Input field={'Name'} type={'text'} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                  <Input field={'Email'} type={'text'} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                  <Input field={'Password'} type={'password'} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <label>
                  <Input field={'Confirm your password'} type={'password'} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </label>
              </label>
              {errorMessage && <p className="error">{errorMessage}</p>}
              <label>
                <Button text={'Sign Up'} onClick={handleSignUp}/>
              </label>
              <label className="sign">
                Already have an account? <Link to="/" className="link">Login</Link>
              </label>             
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default SignUp;