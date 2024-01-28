import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    const existingUser = localStorage.getItem("username");
    if (existingUser) {
      alert("Username already registered");
      return;
    }

    if (password.length < 8) {
      alert("Password too short");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password is incorrect");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Username registered");
  };

  return (
    <div>
      <h2>Register to Party Wall</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
