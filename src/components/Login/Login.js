import React, { useContext } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const from = location.state?.from?.pathname || "/";
    const app = initializeApp(firebaseConfig);
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const { displayName, email } = result.user;
                const signedInUser = {
                    name: displayName, email
                }
                setLoggedInUser(signedInUser);
                navigate(from, { replace: true });
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>This is Login</h1>
            <Button variant="outlined" onClick={handleGoogleSignIn} startIcon={<GoogleIcon />}>
                Google Sign In
            </Button>

        </div>
    );
};

export default Login;