import { useState, createContext, useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, 
getAuth, 
onAuthStateChanged, 
signInWithEmailAndPassword, 
signInWithPopup, 
signOut, 
updateProfile 
} from "firebase/auth"
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // Create a New User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Create A New User With Google Provider
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
          });
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    })

    const authinfo = {
        user,
        logOut,
        loading,
        loginUser,
        createUser,
        googleSignIn,
        updateUserProfile
    };

  return (
    <AuthContext.Provider value={authinfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
