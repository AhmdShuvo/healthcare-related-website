import React, { createContext } from 'react';
import useFirebase from '../../Hooks/UseFirebase';


  
//  Create Auth Context //
 export const AuthContext=createContext(null);
const  AuthProvider = ({children}) => {
    //  use firebase as Conext //
    const allContext=useFirebase()
    return (

        // set value for allContext 
        <AuthContext.Provider value={allContext}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;