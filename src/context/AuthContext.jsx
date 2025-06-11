import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from '../utils/supabaseClient'

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [session, setSession] = useState(undefined);
    
    // Sign up
    const signUpNewUser = async() => {
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

    useEffect(() => {
        supabase.auth.getSession().then(({data: {session}}) => {
            getSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    // sign out
    const signOut = () => {
        const {error} = supabase.auth.signOut();
        if (error) {
            console.error("there was an error:", error);
        }
    };

    // sign in
    const signInUser =  async({email, password}) => {
        try {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
        } catch (error) {
            console.error("an error occured", error);
        }
    };


    return(
        <AuthContext.Provider value ={{session, signUpNewUser, signOut}}>
            {children}
        </AuthContext.Provider>
    )
};

export const UserAuth = () => {
    return useContext(AuthContext);
}