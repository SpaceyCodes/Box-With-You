import React, { Component } from 'react';
import { fire } from '../fireConfig';
import TeamsBlock from './TeamsBlock';
import TeamsCreation from './TeamCreation';
class ChatPage extends Component {
    state = {}
    componentDidMount() {
        let currentComponent = this;
        var userListener = fire.database().ref('/users/' + fire.auth().currentUser.uid);
        userListener.on('value', function (snapshot) {
            console.log('ok')
            let newState = {
                ...snapshot.val,
            }
            currentComponent.setState(newState)
        });
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
                    <TeamsBlock teamsOrder={this.state.teamsOrder} />
                    <TeamsCreation />
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '90%',
    height: '90%',
}
export default ChatPage;

