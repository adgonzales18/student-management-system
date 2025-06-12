import React from 'react'
import Dashboard from './pages/Homepage/dashboard'
import AuthGuard from './containers/AuthGuard'


function App() {
 
    return (
      <AuthGuard>
        <div><Dashboard/></div>
      </AuthGuard>
      
    )

}

export default App
