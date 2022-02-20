import { Fragment } from "react"
import { useState } from "react/cjs/react.development";

const FormValidationOnChange = () => {
    const [nameValid, setNameValid] = useState(true);

    function inputChangeHandler(e) {
        if (e.target.value.length <= 4)
            setNameValid(false);
        else
            setNameValid(true);
    }
    return (
        <Fragment>
            <div>Form Validation on Change</div>
            <form>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input type='text' name='username'onChange={inputChangeHandler} />
                    {!nameValid && <p>Please enter Name</p>}
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </Fragment>
    )
}

export default FormValidationOnChange;