import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/api/auth/login", {
        username,
        password,
      });

      const user = {
        token: response.data.token,
        userId: response.data.userId,
      };

      login(user);
      navigate("/");
    } catch (err) {
      console.log("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Link to="/signup">Sign up here</Link>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br/>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
