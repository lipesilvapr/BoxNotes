import { Link } from 'react-router-dom';
import '../styles/Button.css'

function Button({text, onClick, link}) {
    return(
        <div className='superior' onClick={onClick}>
            <Link to={link} className='custom-link'>  
                <div className="bt">
                    <p>{text}</p>
                </div>
            </Link>
        </div>
    );
}

export default Button;