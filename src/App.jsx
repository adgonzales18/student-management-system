import React from 'react'
import AuthGuard from './containers/AuthGuard'
import AppContainer from './containers/AppContainer'
import { Outlet } from 'react-router-dom'


function App() {
 
    return (
      <AuthGuard>
        <AppContainer>
          <Outlet/>
        </AppContainer>
      </AuthGuard>
      
    )
}

export default App
