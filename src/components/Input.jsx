import '../styles/Input.css'

function Input({field, type, onChange}) {
    return (
        <>
            {field}
            <input type={type} onChange={onChange}/>
        </>
    );
}

export default Input;