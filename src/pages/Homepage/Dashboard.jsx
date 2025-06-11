import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <p>Dashboard</p>
        <Link to="/signin" >Sign In</Link>
    </div>
    
  )
}

export default Dashboard