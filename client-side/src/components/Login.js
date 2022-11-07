import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const val= 3400;
    
    const gotoSignupPage = () => navigate('/register');
    // const gotoSignupPage = () => navigate('../register'); this works, why??

    const postLoginDetails = () => {
        fetch('http://localhost:4000/api/login', {
            method : 'POST',
            body : JSON.stringify({
                email, password,
            }),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('in the post login block frontend');
            if(data.error_message) alert(data.error_message);
            else {
                console.log(data.data);
                localStorage.setItem('username', data.data.username);
                navigate('/phone/verify');
            }
        })
        .catch((err) => console.error(err))
    }

    const handleSubmit = (e) => {
        e.preventDefualt();
        console.log(e);
        postLoginDetails();
        console.log({email, password});
        setEmail("");
        setPassword("");
    }
    return (
        <div className='login__container'>
            <h2>Login</h2>
            <form className='login__form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                type='text' id='email' name='email' value ={email}
                required onChange={(e) => setEmail(e.target.value)}>
                </input>
                <label htmlFor='password'>Password</label>
                <input type='password'
                id = 'password' name = 'password' minLength = {8}
                required
                value = {password} onChange = {(e) => setPassword(e.target.value)}>
                </input>
                <button className='login__btn'>{`Sign In`}</button>
                <p>
                    Don't have an account?{' '}
                    <span className='link' onClick={gotoSignupPage}>Sign Up</span>
                </p>
            </form>
        </div>
    );
}

export default Login;