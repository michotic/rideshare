import React from 'react'
import './emailauth.css'
import { Navbar } from '../../components'

const EmailAuth = () => {
    return (
      <div className="emailauth">
        <div className="emailauth__navbar"><Navbar /></div>
        <h1 id='header'><span>Enter 4 digit code sent to email</span></h1>
          <div class="pinBox">
            <form id='auth' action='/phone'>
              <input class="pinEntry" name="token" type="text" maxlength="4" minlength='4' required autocomplete="off" />
              <input type='submit' value='arrow' />
            </form>
          </div>
        </div>
    )
}

export default EmailAuth