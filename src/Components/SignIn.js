import React, { Component } from 'react';
import { fire, provider } from '../fireConfig';


class SignIn extends Component {
    SignIn = () => {
        let username = 'wenkang11861@gmail.com';
        let password = 'password';
        fire.auth().signInWithEmailAndPassword(username, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // ...
        });
    }
    CreateAccount = () => {
        let username = 'wenkang11861@gmail.com';
        let password = 'password';
        fire.auth().signInWithRedirect(provider);
        this.props.changeToLoading();






        // fire.auth().createUserWithEmailAndPassword(username, password).catch(function (error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     console.log(errorCode)
        //     console.log(errorMessage)
        //     // ...
        // });
    }
    SignOut = () => {
        fire.auth().signOut().then(function () {
            console.log('Logged Out')

        }).catch(function (error) {
            console.log(error)
        });
    }
    render() {
        return (
            <div>
                <div style={contentBlockStyle}>
                    <button onClick={this.SignIn}>Sign In</button>
                    <button onClick={this.CreateAccount}>Create Account</button>
                    <button onClick={this.SignOut}>Sign Out</button>
                </div>
            </div>
        );
    }
}
const contentBlockStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
}
export default SignIn;

