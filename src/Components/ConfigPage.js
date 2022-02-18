import React, { Component } from 'react';
import { fire } from '../fireConfig';


class ConfigPage extends Component {
    state = {
        Authed: false
    }
    componentDidMount() {
    }
    SignOut = () => {
        fire.auth().signOut().then(function () {
            console.log('Logged Out')

        }).catch(function (error) {
            console.log(error)
        });
    }
    toggleInputColor = (event) => {
        if (event.target.style.backgroundColor === 'rgba(0, 0, 0, 0.1)') {
            event.target.style.backgroundColor = 'rgba(0,0,0,0)'
        } else {
            event.target.style.backgroundColor = 'rgba(0,0,0,0.1)'
        }

    }
    SaveConfig = (event) => {
        let username = document.getElementById('username').value;
        let status = document.getElementById('status').value;
        fire.database().ref('/users/' + fire.auth().currentUser.uid).set({
            username: username,
            uuid: fire.auth().currentUser.uid,
            status: status,
            groupsOrder: { 0: 'basket ball', 1: 'football' },
        });
    }
    render() {
        return (
            <div>
                <div style={contentBannerStyle}>
                    <div style={contentBlockStyle}>
                        <div>
                            <div>Username:</div>
                            <input id='username' style={inputStyle} onMouseEnter={this.toggleInputColor} onMouseLeave={this.toggleInputColor}></input>
                            <div>Status(Optional):</div>
                            <input id='status' style={inputStyle} onMouseEnter={this.toggleInputColor} onMouseLeave={this.toggleInputColor}></input>
                            <button onClick={this.SaveConfig}>Save</button>
                            <button onClick={this.SignOut}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const contentBannerStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vh',
    backgroundColor: '#eee',
}
const contentBlockStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100px',
    marginBottom: '100px',
}
const inputStyle = {
    display: 'block',
    marginBottom: '10px',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: '20px',
    transition: '0.3s',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingBottom: '2px',
    borderBottom: '1px solid black',
}

export default ConfigPage;
