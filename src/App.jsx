<<<<<<< HEAD
import { useEffect, useState } from 'react'
import { supabase } from './utils/supabaseClient'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
=======
import { useState } from 'react'

>>>>>>> 4786a47274c4c6331ca81e8cf502deffd2968c7b

function App() {
  const [session, setSession] = useState(null)

<<<<<<< HEAD
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.unsubscribe()
  }, [])
  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (<div>Logged in!</div>)
  }
=======
  return (
    <>
     
    </>
  )
>>>>>>> 4786a47274c4c6331ca81e8cf502deffd2968c7b
}

export default App
