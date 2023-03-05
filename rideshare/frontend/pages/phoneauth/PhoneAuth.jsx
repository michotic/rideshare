import React from 'react'
import './phoneauth.css'
import { Navbar } from '../../components'

const PhoneAuth = () => {
    return (
        <div className="phoneauth">
        <div className="phoneauth__navbar"><Navbar /></div>
        <h1 id='header'><span>Enter 4 digit code sent to phone</span></h1>
          <div class="pinBox">
            <form id='auth' action='/password' required>
              <input class="pinEntry" name="token" type="text" maxlength="4" minlength='4' required autocomplete="off" />
              <input type='submit' value='arrow' />
            </form>
          </div>
        </div>
    )
}


export default PhoneAuth