import { useContext } from "react";
import { AuthContext } from "../Components/AuthContext/AuthProvider";

const useAuth=()=>{
      
    return useContext(AuthContext)
    
}
export default useAuth;