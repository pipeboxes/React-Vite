import React from 'react';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <p>Correo logueado: holaa@mammamia.cl</p>
        <p>Nombre: Lero Lero</p>
        <p>Apellidos: Candelero</p>
      </div>
      <button className="btn btn-logout">Cerrar sesión</button>
    </div>
  );
};

export default Profile;