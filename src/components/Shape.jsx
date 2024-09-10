import '../styles/Shape.css';

function Shape({title, content}) {
    return(
        <>
            <div className='box'>
                <p className='titleBox'>{title}</p>
                <p className='contentBox'>{content}</p>
            </div>
           
        </>
    );
}

export default Shape;