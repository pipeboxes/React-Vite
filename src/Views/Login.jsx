import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from '../Views/UserContext';

function Login({ users }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.email === email && user.password === password);

    if (!user) {
      setError("Email o contraseña incorrectos. Intenta nuevamente.");
      return;
    }

    login(email);
    setError("");
    alert("Inicio de sesión exitoso.");
    navigate("/profile");
  };

  return (
    <div className="Login">
      <div className="form-box">
        <h2 className="form-title">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;