import '../styles/Input.css'

function Input({field, type}) {
    return (
        <>
            {field}
            <input type={type}/>
        </>
    );
}

export default Input;