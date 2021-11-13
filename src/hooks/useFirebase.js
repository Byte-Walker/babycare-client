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

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    initFirebaseApp();
    const auth = getAuth();

    // Send user to the database
    // useEffect(() => {
    //     if (user.email) {
    //         fetch('http://localhost:5000/user', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(user),
    //         })
    //             .then((response) => response.json())
    //             .then((data) => console.log(data));
    //     }
    // }, [user]);

    // Send the user information to our database
    const sendUserToDatabase = (user) => {
        fetch('https://morning-tundra-59616.herokuapp.com/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    };

    // Email sign up (create new user)
    const signUpEmail = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                setUser(userCredential.user);
                sendUserToDatabase(userCredential.user);
                console.log('Account created successfully');

                // Set name
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {
                        console.log('Name updated');
                        signOutUser();
                        window.location.reload();
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

    // Return the necessary stuffs
    return {
        user,
        error,
        signUpEmail,
        signInEmail,
        signOutUser,
        setError,
    };
};

export default useFirebase;
