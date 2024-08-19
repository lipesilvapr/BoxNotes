import { Link } from "react-router-dom";
import Button from "../components/Button";
import '../styles/Auth.css';
import Logo from '../img/icons8-lápis-96.svg'
import Check from "../components/Check";
import Input from "../components/Input";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../services/firebaseConfig";

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    function handleSingIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if (loading) {
        return <p>carregando...</p>
      }
    
    if (user) {
        console.log(user);
    }
    return (
        <div className="all">
            <div className="auth">
                <div className="bg">
                    <img src={Logo}/>
                    <h1>Welcome!</h1>
                </div>
                <div className="lg">
                    <div className="title">
                        <h1>Login</h1>
                        <p>Welcome back! Please login to your account</p>
                    </div>
                    <form>
                        <label>
                            <label>
                                <Input field={'Email'} type={'text'} onChange={(e) => setEmail(e.target.value)}/>
                            </label>
                            <label>
                                <Input field={'Senha'} type={'password'} onChange={(e) => setPassword(e.target.value)}/>
                            </label>
                            {error ? <p className="error">Incorrect email or password, try again</p> : ''}
                        </label>
                        <label className="forgot">
                            <div>
                                <Check /> Remember me
                            </div>
                            <Link to="/forgotpassword" className="link">Forgot password?</Link>
                        </label>
                        <label>
                            <Button text={'Login'} onClick={handleSingIn}/>
                        </label>
                        <label className="sign">
                            New user? <Link to="/signup" className="link">Sign Up</Link>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Auth;