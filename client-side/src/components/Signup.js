import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
const SignUp =() => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [tel, setTel] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        console.log({email, username, tel, password});
        setEmail(''); setPassword(''); setTel(''); setUsername('');
    }
    const gotoLoginPage = () => navigate('/');
    return (
        <div className="signup__container">
            <h2>Sign Up</h2>
            <label htmlFor="email">Email Address</label>
            <form className="signup_form" onSubmit={handleSubmit}>
                <input
                type='email' id= 'email' name = 'email' value = {email}
                required 
                onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="username1">Username</label> {/*username is changed to username1*/}
                <input
                type = 'text' id = 'username' name = 'username' value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="tel">Phone Number</label>
                <input
                type = 'tel' id = 'tel' name = 'tel' value = {tel}
                required
                onChange={(e) => setTel(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                type = 'password' id = 'password' name = 'password' value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                />
                <button className="signup__button">Sign Up</button>
                <p>
                    Already have an account?{' '}
                    <span className="link" onClick={gotoLoginPage}>Login Here</span>
                </p>
            </form>
        </div>
    );
}
export default SignUp;