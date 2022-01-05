import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../AuthContext/AuthProvider';


    //  Creating Private For some components ///
        
const PrivateRoute = ({children,...rest}) => {

    const {user,loading}=useContext(AuthContext);
    if(loading){

        return "loading"
    }

    return (
        <Route
        {...rest}
        render={({location})=>user.email?children:<Redirect to={{pathname:"/login",state:{from:location}}}></Redirect>}

     >
           
            
        </Route>
    );
};

export default PrivateRoute;