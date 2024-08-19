import Input from '../components/Input';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Logo from '../img/icons8-lápis-96.svg';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { auth } from '../services/firebaseConfig';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  function handleSignUp(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando...</p>
  }
    return (
      <div className="all">
        <div className='auth'>
          <div className='bg'>
            <img src={Logo}/>
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
                  <Input field={'Name'} type={'text'}/>
                </label>
                <label>
                  <Input field={'Email'} type={'text'} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                  <Input field={'Password'} type={'password'} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <label>
                  <Input field={'Confirm your password'} type={'password'}/>
                </label>
              </label>
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