import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Index,
  Landing,
  Login,
  Register,
  Password,
  EmailAuth,
  Phone,
  PhoneAuth,
} from "./pages/";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />}></Route>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/email_auth" element={<EmailAuth />}></Route>
      <Route path="/phone" element={<Phone />}></Route>
      <Route path="/phone_auth" element={<PhoneAuth />}></Route>
      <Route path="/password" element={<Password />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
