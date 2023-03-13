import React from "react";
import { useState } from "react";
import "./login.css";
import { Navbar } from "../../components";
import { ApiClient, Profile, ProfileApi } from "../../api/src";

var defaultClient = new ApiClient("http://localhost:8000/");
let apiClient = new ProfileApi(defaultClient);
var basicAuth = defaultClient.authentications["basicAuth"];
var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data, response);
  }
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    basicAuth.username = username;
    basicAuth.password = password;
    apiClient.profileRetrieve(username, callback);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
