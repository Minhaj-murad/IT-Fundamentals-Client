import React, { createContext } from 'react';
import app from '../../firebase.init';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);
const Usecontext = ({children}) => {



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {createUser, signIn}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Usecontext;