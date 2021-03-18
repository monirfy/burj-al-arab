import React, { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { UserContext } from '../App';
import { useHistory, useLocation } from 'react-router';

//firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };

        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  return (
    <>
      <section className='page-title'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h2 className='display-2 text-white mb-0'>Log In</h2>
            </div>
          </div>
        </div>
      </section>
      <section className='login py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 mx-auto text-center'>
              <div className='card p-4'>
                <h2 className='mb-3'>Welcome to Burj Al Arab</h2>

                <button type='button' className='btn btn-primary' onClick={handleGoogleSignIn}>
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
