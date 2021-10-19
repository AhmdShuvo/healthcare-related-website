import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { useState } from "react";

 
 const usePasswordLogin=()=>{


       const [user,setuser]=useState()


    const handleSigninclick=(auth,email,password)=>{


        createUserWithEmailAndPassword(auth,email,password).then(result=>{
        console.log(result.user);
             ;
            })

            return {handleSigninclick}

    }

    


 }
 export default usePasswordLogin;