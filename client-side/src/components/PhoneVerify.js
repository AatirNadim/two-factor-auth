import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const PhoneVerify = () => {
    const [code, setCode] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        console.log({code});
        setCode('');
        navigate('/dashboard');
    }
    return (
        <div className='verify'>
            <h2 style={{marginBottom : "30px"}}>Verify your Phone Number</h2>
            <form className='verify__form' onSubmit={handleSubmit}>
                <label htmlFor = 'code' style={{marginBottomt :"10px"}}>A code has been sent to your phone</label>
                <input
                type='text' name = 'code' id = 'code' value = {code}
                required
                onChange={(e) => setCode(e.target.value)}
                />
                <button className='codeBtn'>Authenticate</button>
            </form>

        </div>
    );
}

export default PhoneVerify;