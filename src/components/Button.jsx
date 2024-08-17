import { Link } from 'react-router-dom';
import '../styles/Button.css'

function Button({text}) {
    return(
        <div className='superior'>
            <Link to="app" className='custom-link'>  
                <div className="bt">
                    <p>{text}</p>
                </div>
            </Link>
        </div>
    );
}

export default Button;