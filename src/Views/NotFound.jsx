import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="not-found-container">
      {showPopup && (
        <div className="popup">
          <p>Error, página desconocida</p>
          <button onClick={handleClosePopup} className="btn btn-accept">Aceptar</button>
        </div>
      )}
      {!showPopup && (
        <>
          <h1>Error 404 - Página no encontrada</h1>
          <Link to="/" className="btn btn-home">Volver al Home</Link>
        </>
      )}
    </div>
  );
};

export default NotFound;