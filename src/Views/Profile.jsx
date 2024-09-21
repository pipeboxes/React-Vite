import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Views/UserContext';

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="profile-container">
      <div className="profile-info">
        <strong>Bienvenid@ usuario: {currentUser || "No disponible"}</strong>
        <br/>
        <p>¿Estás list@ para agregar algunas pizzas?</p>
      </div>
      <button className="btn btn-logout" onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;