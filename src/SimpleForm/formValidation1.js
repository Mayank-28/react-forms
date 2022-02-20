import { Fragment, useRef } from "react"
import { useState } from "react/cjs/react.development";

const FormValidationOnBlurr = () => {
    const userNameRef = useRef();
    const [nameValid, setNameValid] = useState(true);

    function inputBlurHandler() {
        if (userNameRef.current.value === '')
            setNameValid(false);
        else
            setNameValid(true);
    }
    return (
        <Fragment>
            <div>Form Validation on Blurr</div>
            <form>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input type='text' name='username' ref={userNameRef} onBlur={inputBlurHandler} />
                    {!nameValid && <p>Please enter Name</p>}
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </Fragment>
    )
}

export default FormValidationOnBlurr;