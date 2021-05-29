import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
// import firebaseConfig from './firebase.config';
// import firebase from "firebase/app";
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";

const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    // let history = useHistory();
    // let location = useLocation();
    // let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = (e) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };

                // setUserToken();
                // // console.log(signedInUser);
                // // setLoggedInUser(signedInUser);                
                // history.replace(from);

                // sessionStorage('token', signedInUser)

            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
        e.preventDefault();
    }

    return (
        <Container>
            <h3>this is login page...</h3>
            <button className="btn btn-danger" onClick={handleGoogleSignIn}>Google Sign In</button>
        </Container>
    );
};

export default Login;