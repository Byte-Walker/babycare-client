import initFirebaseApp from '../Firebase/Firebase.init';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { useState } from 'react';
import { useHistory } from 'react-router';

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');



    initFirebaseApp();
    const auth = getAuth();

    // Email sign up (create new user)
    const signUpEmail = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                // window.location.reload();
                setUser(userCredential.user);
                console.log('Account created successfully');
                

                // Set name
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {
                        console.log('Name updated');
                        
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                setError(error.code);
            });
    };

    // Email sign in
    const signInEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);         
            })
            .catch((error) => {
                setError(error.code);
            });
    };

    // Keep the user signed in
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            // 
        }
    });

    // Sign out user
    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                console.log('Signed out successfully');
            })
            .catch((error) => {
                console.log('There is an error signing out the user');
            });
    };

    return {
        user,
        error,
        signUpEmail,
        signInEmail,
        signOutUser,
    };
};

export default useFirebase;
