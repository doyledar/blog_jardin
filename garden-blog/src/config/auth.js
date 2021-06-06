import React, {useEffect, useState} from 'react'
import firebase from 'firebase/app';
import "firebase/auth"
import {firebaseApp} from './base'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)


  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return(
    <AuthContext.Provider
      value={{currentUser}}  
    >
      {children}
    </AuthContext.Provider>
  )
}
  
/* export const register = async({email, password})=>{
    const resp = await firebase.auth()
      .createUserWithEmailAndPassword(email, password);
    return resp.user;
}
  
export const login = async({email, password})=>{
    const res = await firebase.auth()
      .signInWithEmailAndPassword(email, password);
    return res.user;
} */