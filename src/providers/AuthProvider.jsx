import React, { createContext, useEffect, useState } from 'react';

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from '../firebase/Firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  // User Register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // User Log in
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // User Log out
  const logOut = () => {
    return signOut(auth);
  };
  // Log in with google
  const handleGoogleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Log in with github
  const handleGithubLogIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // User Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);

      return () => {
        unSubscribe();
      };
    });
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    handleGoogleLogIn,
    handleGithubLogIn,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
