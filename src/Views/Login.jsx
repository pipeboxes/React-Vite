import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from '../Views/UserContext';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      setError("");
      alert("Inicio de sesión exitoso.");
      navigate("/profile");
    } catch (error) {
      setError(error.message || "Email o contraseña incorrectos. Intenta nuevamente.");
    }
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
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
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