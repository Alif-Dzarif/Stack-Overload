import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const user = localStorage.app_auth_token

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [])

  return children;
}
