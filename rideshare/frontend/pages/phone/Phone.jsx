import React from "react";
import "./phone.css";
import { Navbar } from "../../components";

const Phone = () => {
  return (
    <div className="phone">
      <div className="phone__navbar">
        <Navbar />
      </div>
      <div className="phone__forum">
        <h1>
          <span>Next, we need your phone number.</span>
        </h1>
        <form id="phone" action="/password">
          <ul>
            <li>
              <input id="ext" type="number" placeholder="ext." required />
            </li>
            <li>
              <title>phone</title>
              <input type="number" placeholder="Enter phone number" required />
            </li>
            <li>
              <input type="submit" value="Continue"></input>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Phone;
