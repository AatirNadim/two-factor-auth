import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const val= 3400;
    const handleSubmit = (e) => {
        e.preventDefualt();
        console.log(e);
        console.log({email, password});
        setEmail("");
        setPassword("");
    }
    const gotoSignupPage = () => navigate('/register');
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
                <input type='text'
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