import React from 'react';
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from '@firebase/app';
import firebaseConfig from '../Firebase/FirebaseConfig';

  const app=initializeApp(firebaseConfig)
const auth = getAuth();


const UseSignUp = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('')
    const [email, setEmail] = useState({})
    const [password, setPassword] = useState({})
    const [isLogin, setIsLogin] = useState(false)


       

    const handleRegistration = (e) => {
        e.preventDefault();
        // console.log(email, password);
        if (password.length < 6) {
            setError("Warning: Password must be 6 character long")
            return
        }

        isLogin ? loginAccount(email, password) : registerNewAccount(email, password);



    }

    const registerNewAccount = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user
            console.log(user);
            setError('')
            setUserName();
          }).catch(error => {
            console.log(error.message)
          })
    
      }
      const loginAccount = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user
           
            setError('')
          }).catch(error => {
            console.log(error.message)
          })
    
      }
    
   
    
      const handleName = (e) =>{
        setName(e.target.value)
    
      }
    
      const setUserName = () =>{
        updateProfile(auth.currentUser, {displayName: name})
        .then(result =>{})
      }
    
    
      const handleEmail = (e) => {
        // e.preventDefault();
        setEmail(e.target.value);
    
      }
    
      const handlePassword = (e) => {
        // e.preventDefault();
        setPassword(e.target.value);
    
      }
    
      const toggleHandle = (e) => {
        setIsLogin(e.target.checked)
    
      }
    
    
    
     
    


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else{
              setUser({})
            }
        })
    }, [])


    return {
        user,
        error,
        handleRegistration,
        registerNewAccount,
        loginAccount,
        handleName,
        setUserName,
        handleEmail,
        handlePassword,
        toggleHandle,
        isLogin,
    }


};

export default UseSignUp;