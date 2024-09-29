import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en la autenticación.');
      }

      const data = await response.json();
      setCurrentUser(data.email);
      setToken(data.token);
      localStorage.setItem('loggedInUser', data.email);
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.error('Error en login:', error);
      throw new Error(error.message);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en el registro.');
      }

      const data = await response.json();
      setCurrentUser(data.email);
      setToken(data.token);
      localStorage.setItem('loggedInUser', data.email);
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.error('Error en registro:', error);
      throw new Error(error.message);
    }
  };

  const getProfile = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('No se encontró token de autenticación.');
      }

      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al obtener el perfil del usuario.');
      }

      const profileData = await response.json();
      setProfile(profileData);
    } catch (error) {
      console.error('Error obteniendo el perfil:', error);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
    setProfile(null);
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ currentUser, token, profile, login, register, getProfile, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);