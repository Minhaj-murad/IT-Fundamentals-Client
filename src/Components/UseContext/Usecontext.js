import React, { createContext, useEffect } from 'react';
import app from '../../firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const Usecontext = ({children}) => {
    const [user, setUser] = useState(null);



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const googlesignin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const githubsignin =(provider)=>{
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
                setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {user,createUser, signIn,googlesignin,githubsignin,logOut,updateUserProfile}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Usecontext;