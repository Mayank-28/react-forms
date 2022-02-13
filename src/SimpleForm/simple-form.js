import { useRef, useState } from 'react';

function SimpleForm() {

    //using onChange we are updating the state on every keystoke 
    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');

    function setNameHandler(event) {
        setUsername(event.target.value);
    }
    function setEmailHandler(event) {
        setUseremail(event.target.value);
    }

    //using ref we will get the value when we need (on form submition)
    const userNameRef = useRef();
    const userEmailRef = useRef();

    function submitHandler(e) {
        e.preventDefault();
        console.log('useState name ' + username);
        console.log('useState email ' + useremail);
        console.log('useRef Name ' + userNameRef.current.value)
        console.log('useRef Email ' + userEmailRef.current.value)
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">User Name</label>
                <input type='text' ref={userNameRef} name="username" onChange={setNameHandler} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type='text' ref={userEmailRef} name="email" onChange={setEmailHandler} />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default SimpleForm;