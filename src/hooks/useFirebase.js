import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const auth = getAuth();

    // google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [])

    // google sign out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // window.location.reload()
            })
            .finally(() => setIsLoading(false))
    }

    // User register using email password
    const handleUserRegister = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUserName(name)
                setError('')
                window.location.reload()
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // User log in using email password
    const handleUserLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // user name set from user register
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    // users forgetting password reset way
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        handleUserRegister,
        handleUserLogIn,
        isLoading,
        setIsLoading,
        resetPassword
    }
}

export default useFirebase