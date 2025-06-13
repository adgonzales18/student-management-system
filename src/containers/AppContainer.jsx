import React from 'react'
import NavBar from '../components/NavBar'

function AppContainer({children}) {
  return (
    <div>
        <div>{children}</div>
    </div>
  )
}

export default AppContainer