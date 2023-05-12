import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  // Registration
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with email and password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login with google account
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Login with facebook account
  const loginWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  // Got the user changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsers(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    register,
    login,
    users,
    loading,
    loginWithGoogle,
    loginWithFacebook,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
