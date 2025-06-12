import React from 'react'
import { UserAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const { signOut } = UserAuth;
  const navigate = useNavigate;

  const handleSignOut = async () => {
    await signOut();
    navigate('/'); // or your login page
  };

  return (
    <div>
        <p>Dashboard</p>
        <a href="/" onClick={handleSignOut}>Sign Out</a>
    </div>
    
  )
}

export default Dashboard