import { getAuth } from "firebase/auth";
import React, { createContext, useState } from 'react';
import app from '../Firebase/Firebase.init';

//AuthContext export
export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
const [user, setUser] = useState({});


const authInfo = {user};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;