import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase.fonfig";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const AuthProviders = ({ children }) => {
  //user
  const [user, setUser] = useState(null);
  //loading
  const [loading, setLoading] = useState(true);
  //get auth
  const auth = getAuth(app);
  /*  */
  /* google */
  const provider = new GoogleAuthProvider();
  //create a user

  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  //siginIn With email and password
  const singInEmailAndPassWord = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

/* update name ana photo */
const updatePro=(name,photo)=>{

  return updateProfile(auth.currentUser,{
    displayName:name,photoURL:photo
  })
}




  //onAuthStateChange

  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      return unsubscribe();
    };
  }, []);



  //logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  /* update profile */

  // horaization /consent value

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    singInEmailAndPassWord,
    googleLogin,
    logOut,
    updatePro,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProviders;
