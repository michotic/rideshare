import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Login, Register, CreateListing, RideBrowser } from "./pages/";
import { ProfileApi, ApiClient, PatchedProfile, Profile } from "./api/src";
import { stringify } from "querystring";

const App = () => {
  var defaultClient = new ApiClient("http://localhost:8000/");
  // Configure HTTP basic authorization: basicAuth
  var basicAuth = defaultClient.authentications["basicAuth"];
  basicAuth.username = "frontend";
  basicAuth.password = "rideshare";
  var callback = function (error, data, response) {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/post-ride" element={<CreateListing />}></Route>
          <Route path="/view-rides" element={<RideBrowser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
