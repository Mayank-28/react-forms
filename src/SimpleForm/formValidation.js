import { useRef, Fragment, useState } from "react";

const FormValidationOnSubmit = () => {

    //usings ref we will validate the inputs on submit of form and will show errors
    const usernameref = useRef();
    const userEmailref = useRef();

    const nameisValid = (value) => value !== '';
    const emailisValid = (value) => value.includes('@');

    const [fieldsValid, setfieldsValid] = useState({
        name : true,
        email : true
    });

    function submitHandler(e) {
        e.preventDefault();
        const enteredName = usernameref.current.value;
        const enteredEmail = userEmailref.current.value;
        setfieldsValid({
            name: nameisValid(enteredName),
            email : emailisValid(enteredEmail)
        })
    }

    return (
        <Fragment>
            <div>Form With validation and error</div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input type='text' name='username' ref={usernameref} />
                    {!fieldsValid.name && <div>Please enter name</div>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type='text' name='email' ref={userEmailref} />
                    {!fieldsValid.email && <div>Please enter correct email</div>}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </Fragment>
    )
}

export default FormValidationOnSubmit;
