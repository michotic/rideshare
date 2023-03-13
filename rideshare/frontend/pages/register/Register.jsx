import React from "react";
import { useState } from "react";
import { ApiClient, Profile, ProfileApi } from "../../api/src";
import { Navbar } from "../../components";
import "./register.css";

var defaultClient = new ApiClient("http://localhost:8000/");
let apiClient = new ProfileApi(defaultClient);
var basicAuth = defaultClient.authentications["basicAuth"];
// basicAuth.username = "frontend";
// basicAuth.password = "rideshare";
var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [file, setFile] = useState(null);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      let newProfile = new Profile(username, password, email);
      console.log(apiClient.profileCreate(newProfile));
    } else {
      setPasswordsMatch(false);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePasswordMatch = () => {
    setPasswordsMatch(true);
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordMatch}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            onBlur={handlePasswordMatch}
          />
        </div>
        {!passwordsMatch && <p>Passwords do not match</p>}
        <div>
          <label>Choose a File:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
