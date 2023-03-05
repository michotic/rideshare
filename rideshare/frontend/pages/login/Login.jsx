import React from 'react'
import './login.css'
import { Navbar } from '../../components' 

const Login = () => {
    return (
        <div className="login">
            <div className="login__navbar"><Navbar /></div>
            <div className="login__forum">
                <h1><span>How would you like to login?</span></h1>
                <form id='login' action="/">
                <ul>
                    <li><input type="email" placeholder='Enter email or phone number' required /></li>
                    <li><input type="password" placeholder='Enter password' required/></li>
                    <li><input type="submit" value='Continue'></input></li>
                </ul>
                </form>
            </div>
            

        </div>
    );
}

export default Login