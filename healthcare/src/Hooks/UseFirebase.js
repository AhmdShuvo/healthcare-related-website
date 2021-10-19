import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvFIz9_no0zMfKtKi2kF0iQci9HcdD3D8",
  authDomain: "healthcarelimited-8fcd8.firebaseapp.com",
  projectId: "healthcarelimited-8fcd8",
  storageBucket: "healthcarelimited-8fcd8.appspot.com",
  messagingSenderId: "880059517762",
  appId: "1:880059517762:web:8aa13052a752e99dd816db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();


const useFirebase=()=>{
  
               
const [user,setuser]=useState({});

const googleSignIn=()=>{

  const provider= new GoogleAuthProvider();

   return signInWithPopup(auth,provider)

}

const userSignOut=()=>{

  signOut(auth).then(() => {
    setuser({})
  }).catch((error) => {
    // An error happened.
  });
  
}


useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
     setuser(user)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
},[])









// Returne functions for reuse ////

return {user,googleSignIn,userSignOut};


}
export default useFirebase;