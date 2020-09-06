import React, { createContext, useContext, useEffect, useState } from 'react';

import firebase, { auth, firestore } from '../firebase';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

const authContext = createContext();

const getUserDocument = async uid => {
  if (!uid) return;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error(`Could not get user document ${uid}`, error);
  }
};

const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error('Could not create user document', error);
    }
  }
  return getUserDocument(user.uid);
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const logInWithGoogle = () => {
    return auth.signInWithPopup(googleProvider);
  };

  const logInWithFacebook = () => {
    return auth.signInWithPopup(facebookProvider);
  };

  const logOut = () => {
    return auth.signOut();
  };

  return {
    user,
    logInWithGoogle,
    logInWithFacebook,
    logOut,
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};
