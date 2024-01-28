import React, { useState } from "react";
import Register from "../register/Register";
import style from "./style.css";

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleToggleView = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div>
      {showRegister ? (
        <Register />
      ) : (
        <div className="login-form">
          <h2>Login to Party Wall</h2>
          <label>
            Username:
            <input type="text" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" />
          </label>
          <br />
          <button>Login</button>
          <p>
            You don't have a account ?
            <button onClick={handleToggleView}>Register</button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
