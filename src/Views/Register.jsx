import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function Register({ setUsers }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setError("El password debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("El password y la confirmación deben ser iguales.");
      return;
    }

    // Comprobar si el usuario ya existe
    setUsers(prevUsers => {
      const existingUser = prevUsers.find(user => user.email === email);
      if (existingUser) {
        setError("El email ya está registrado.");
        return prevUsers;
      }
    // Registrar el nuevo usuario
      alert("Usuario registrado con éxito.");
      return [...prevUsers, { email, password }];
    });
    
    setError("");
    navigate("/login");
  };

  return (
    <div className="Register">
      <div className="form-box">
        <h2 className="form-title">Register</h2>
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
          <div className="form-group">
            <label>Confirmar Contraseña:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn">Registrar</button>
        </form>
      </div>
    </div>
  );
}

Register.propTypes = {
  setUsers: PropTypes.func.isRequired
};

export default Register;