import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from '../utils/supabaseClient'

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [session, setSession] = useState(undefined);
    
    // Sign up
    const signUpNewUser = async(email, password) => {
        const {data, error} = await supabase.auth.signUp({
          email: email,
          password: password,  
        });

        if (error) {
            console.error("there was a problem signing up:", error);
            return { success: false, error}
        }
        return { success: true, data }
    };

    // sign out
    const signOut = async () => {
      try {
        console.log("Attempting to sign out...");
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.error("Sign-out error:", error);
        } else {
          console.log("Signed out successfully.");
        }
      } catch (err) {
        console.error("Unexpected error during sign out:", err);
      }
    };

    // sign in
    const signInUser =  async(email, password) => {
        try {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) {
              return { success: false, error };
            }
        
            return { success: true, data };
          } catch (error) {
            console.error("An error occurred", error);
            return { success: false, error };
          }
        };

    //sign in & sign up google
    const signInWithGoogle = async() => {
        try {
            const {data, error} = await supabase.auth.signInWithOAuth({
                provider: 'google',
               
            });

            if (error) {
                console.error("Google sign-in error", error.message);
                return
            }
        } catch (err) {
            console.error("Unexpected error with Google Sign-in", err);
        }
    };

    useEffect(() => {
        async function checkSession() {
          const { data: { session } } = await supabase.auth.getSession();
          console.log('Session:', session);
          setSession(session);
        }
        checkSession();
      
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session);
        });
      
        return () => {
          subscription.unsubscribe();
        };
      }, []);

    return(
        <AuthContext.Provider value ={{session, signUpNewUser, signInUser, signOut, signInWithGoogle}}>
            {children}
        </AuthContext.Provider>
    )
};

export const UserAuth = () => {
    return useContext(AuthContext);
}