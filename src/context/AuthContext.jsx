import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    supabase.auth.getSession()
      .then(({ data }) => {

        setUser(data.session?.user || null);
        setLoading(false);

      });


    const {
      data: { subscription }

    } = supabase.auth.onAuthStateChange(
      (_event, session) => {

        setUser(session?.user || null);

      }
    );


    return () => {
      subscription.unsubscribe();
    };


  }, []);



  async function logout(){

    await supabase.auth.signOut();
    setUser(null);

  }



  return (

    <AuthContext.Provider

      value={{
        user,
        loading,
        logout
      }}

    >

      {children}

    </AuthContext.Provider>

  );

}



export function useAuth(){

  return useContext(AuthContext);

}