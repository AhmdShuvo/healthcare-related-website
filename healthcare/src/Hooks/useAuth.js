import { useContext } from "react"
import { AuthContext } from "../Components/AuthContext/AuthProvider";

          
// Use Aouth from context //
const useAuth=()=>{
    useContext(AuthContext)
}
export default useAuth;