import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const checkUser = () => {
            if(!localStorage.getItem("username")) navigate('/');
    
        }
        checkUser();
    }, [navigate]);
    
    const handleSignout = () => {
        localStorage.removeItem('username');
        navigate('/');
    };

    return (
        <div className='dashboard'>
            <h2 style={{marginBottom : "10px"}}>Howdy, David</h2>
            <button className='signOutBtn' onClick={handleSignout}>Sign Out</button>
        </div>

    );
}

export default Dashboard;