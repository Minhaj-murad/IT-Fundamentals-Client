import React, { createContext } from 'react';
import app from '../../firebase.init';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);
const Usecontext = ({children}) => {



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password);
    }

    const googlesignin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const githubsignin =(provider)=>{
        return signInWithPopup(auth, provider)
    }

    const authInfo = {createUser, signIn,googlesignin,githubsignin}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Usecontext;