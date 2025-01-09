import { useState } from "react";
import Authenticate from "./components/Authenticate.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import "./App.css";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <div>
        <Authenticate />
        <SignUpForm />
      </div>
    </>
  );
}
