import React, { Component, useState, useContext } from 'react'
import { Button, Container, Grid, TextField } from '@material-ui/core'
import { Redirect } from "react-router-dom";
import { Link, useHistory} from 'react-router-dom'
import { firebaseAuthentication } from '../config/firebase'
import firebase from "firebase/app"
import { getAuth, signInWithEmail, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { AuthContext } from '../App'
import { firebaseInit } from '..'

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const auth = getAuth(firebaseInit)
    const Auth = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handleForm = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                if (res.user) Auth.setLoggedIn(true);
                console.log("login gan")
            })
            .catch((e) => {
                setErrors(e.message);
                console.log("login gagal gan")
            });
    }

    const handleSignInWithPopUp = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                Auth.setLoggedIn(true)
                history.push('/')
                history.go(0)
            }).catch(e => {
                setErrors(e.message)
            })
    }
    return (
        <Container>
            <Grid container justify="center">
                <Grid xs="12" md="8" lg="4">
                    <h2>Sign In</h2>
                    <form onSubmit={e => handleForm(e)}>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            name="email"
                            type="email"
                            placeholder="email"
                        />
                        <input
                            onChange={e => setPassword(e.target.value)}
                            name="password"
                            value={password}
                            type="password"
                            placeholder="password"
                        />
                        <hr />
                        <br/>
                        <br/>
                        <br/>
                        <button onClick={() => {history.push('/')}}>Login</button>
                        <span>{error}</span>
                    </form>
                        <button
                            className="googleBtn"
                            onClick={handleSignInWithPopUp}
                            >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="logo" />
                            Login with Google
                        </button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login;