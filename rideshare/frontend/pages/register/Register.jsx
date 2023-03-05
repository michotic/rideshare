import React from 'react'
import './register.css'
import { Navbar } from '../../components'

const Register = () => {
    return (
        <div className="register">
        <div className="register__navbar"><Navbar /></div>
        <div className="register__forum">
            <h1><span>What's your email?</span></h1>
            <form id='register' action="/email_auth">
            <ul>
                <li><input type="email" placeholder='Enter email'/></li>
                <li><input type="submit" value='Continue'></input></li>
            </ul>
            </form>
        </div>
        

    </div>
    )
    
}
export default Register