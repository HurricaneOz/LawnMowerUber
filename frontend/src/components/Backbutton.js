import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button className = "back" onClick={() => navigate('/Home')}>
      ← Back to Home
    </button>
  );
}