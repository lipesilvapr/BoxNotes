import { Link } from "react-router-dom";
import Button from "../components/Button";
import '../styles/Auth.css';
import Logo from '../img/icons8-lápis-96.svg'
import Check from "../components/Check";
import Input from "../components/Input";

function Auth() {
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
                                <Input field={'Email'} type={'text'}/>
                            </label>
                            <label>
                                <Input field={'Senha'} type={'password'}/>
                            </label>
                        </label>
                        <label className="forgot">
                            <div>
                                <Check /> Remember me
                            </div>
                            <Link to="/forgotpassword" className="link">Forgot password?</Link>
                        </label>
                        <label>
                            <Button text={'Login'}/>
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