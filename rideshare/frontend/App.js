import "./App.css";
import {
  Index,
  Landing,
  Login,
  Register,
  Password,
  EmailAuth,
  Phone,
  PhoneAuth,
} from "./pages";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/email_auth" element={<EmailAuth />}></Route>
      <Route path="/phone" element={<Phone />}></Route>
      <Route path="/phone_auth" element={<PhoneAuth />}></Route>
      <Route path="/password" element={<Password />}></Route>
    </Routes>
  );
};

function App() {
  return <Main />;
}

export default App;
