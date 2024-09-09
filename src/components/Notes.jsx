import '../styles/Notes.css';

function Notes() {
    return(
        <>
            <div className="noteSpace">
                <input className='noteTitle' placeholder='Write your note title here...'/>
                <textarea className='note'/>
            </div>
        </>
    );
}

export default Notes;