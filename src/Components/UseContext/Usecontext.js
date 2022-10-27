import React, { createContext, useEffect } from 'react';
import app from '../../firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react';


export const AuthContext = createContext();

const auth = getAuth(app);
const Usecontext = ({ children }) => {
   
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    const googlesignin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const githubsignin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setLoading(false);
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }

    }, [])
   

    const authInfo = { user, createUser, signIn, googlesignin, githubsignin, logOut, updateUserProfile, loading }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
               
               {children}
             
            </AuthContext.Provider>
        </div>
    );
};

export default Usecontext;