import React from 'react'
import './password.css'
import { Navbar } from '../../components'

const Password = () => {
    return (
        <div className="password">
        <div className="password__navbar"><Navbar /></div>
        <div className="password__forum">
            <h1><span>Create a strong password!</span></h1>
            <form id='password' action="/">
            <ul id='forum'> {/* pattern regex below makes the password require min 8 chars, one upper and lowercase and a number   */}
                <li><input type="text" placeholder='Enter password' pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}" required/></li>
                <ul id='requirements'>
                    <h3>Password <strong>MUST</strong> contain the following:</h3>
                    <li><p>Minimum of 8 characters</p></li>
                    <li><p>Minimum one uppercase and one lowercase letter</p></li>
                    <li><p>Minimum one number</p></li>
                </ul>
                <li><input type="submit" value='Continue'></input></li>
            </ul>
            </form>
        </div>
        

    </div>
    )
}


export default Password