import { ClimbingBoxLoader } from 'react-spinners';
import '../styles/Loading.css';

function Loading() {
 return (
    <div className="loadingBg">
        <div>
            <ClimbingBoxLoader size={40} color='#eca451' cssOverride={{rotate: "45deg"}}/>
        </div>
    </div>
 );
}

export default Loading;