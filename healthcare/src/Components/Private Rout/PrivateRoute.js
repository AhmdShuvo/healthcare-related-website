import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../AuthContext/AuthProvider';


    //  Creating Private For some components ///
        
const PrivateRoute = ({children,...rest}) => {

    const {user}=useContext(AuthContext);

    return (
        <Route
        {...rest}
        render={({location})=>user.email?children:<Redirect to={{pathname:"/login",state:{from:location}}}></Redirect>}

     >
           
            
        </Route>
    );
};

export default PrivateRoute;