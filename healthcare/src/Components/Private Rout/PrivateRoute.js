import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from "../../Hooks/useAuth"
// import { AuthContext } from '../AuthContext/AuthProvider';


    //  Creating Private For some components ///
        
const PrivateRoute = ({children,...rest}) => {

    const {user,loading}=useAuth();
    if(loading){

        return "loading From Private Route"
    }
console.log(user.email);
console.log(loading);
    return (
        <Route
        {...rest}
        render={({location})=>user.email?children:<Redirect to={{pathname:"/login",state:{from:location}}}></Redirect>}

     >
           
            
        </Route>
    );
};

export default PrivateRoute;