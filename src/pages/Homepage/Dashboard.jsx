import React from 'react'
import { UserAuth } from '../../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom';


function Dashboard() {

  const { signOut } = UserAuth();
  const navigate = useNavigate;

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
        <p>Dashboard</p>
        <Link onClick={handleSignOut}>Sign Out</Link>
    </div>
    
  )
}

export default Dashboard