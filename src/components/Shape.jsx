import '../styles/Shape.css';

function Shape({title, content, onClick}) {
    return(
        <>
            <div className='box' onClick={onClick}>
                <p className='titleBox'>{title}</p>
                <p className='contentBox'>{content}</p>
            </div>
           
        </>
    );
}

export default Shape;