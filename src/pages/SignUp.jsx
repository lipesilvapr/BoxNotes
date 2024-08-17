import Input from '../components/Input';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Logo from '../img/icons8-lápis-96.svg';

function SignUp() {
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
                  <Input field={'Email'} type={'text'}/>
                </label>
                <label>
                  <Input field={'Password'} type={'password'}/>
                </label>
                <label>
                  <Input field={'Confirm your password'} type={'password'}/>
                </label>
              </label>
              <label>
                <Button text={'Sign Up'}/>
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