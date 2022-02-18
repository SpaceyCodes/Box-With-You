import React, { Component } from 'react';
import { fire } from './fireConfig';
// Components
import ChatPage from './Components/ChatPage';
import SignIn from './Components/SignIn';
import ConfigPage from './Components/ConfigPage';
import LoadingPage from './Components/LoadingPage';
import { store } from './ReduxSetup'
console.log(store.getState())
class App extends Component {
  state = {
    Authed: false,
    ConfigedAccount: false,
    DisplayLoading: true,
  }
  componentDidMount() {
    let currentComponent = this;
    console.log('ok')
    fire.auth().getRedirectResult().then(result => {
      console.log(result.user)
      if (result.user === null) {
        let newState = {
          ...this.state,
          DisplayLoading: false,
        }
        this.setState(newState);
      }
    })
    fire.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log('Logged In')
        fire.database().ref('/users/' + fire.auth().currentUser.uid).once('value').then(function (snapshot) {
          var user = (snapshot.val()) || 'Empty';
          if (user === 'Empty') {
            // User has not configed account (Display ConfigPage)
            console.log(user)
            let newState = {
              Authed: true,
              ConfigedAccount: false,
              DisplayLoading: false,
            }
            currentComponent.setState(newState)
          } else {
            // User has configed account (Display ChatPage)
            console.log(user)
            let newState = {
              Authed: true,
              ConfigedAccount: true,
              DisplayLoading: false,
            }
            currentComponent.setState(newState)

          }

        })
      } else {
        console.log('No User')
        let newState = {
          ...currentComponent.state,
          Authed: false,
        }
        currentComponent.setState(newState)
      }
    });
  }
  changetoChatPage = () => {
    console.log('Chat Page')
    let newState = {
      ...this.state,
      ConfigedAccount: true
    }
    this.setState(newState);
  }
  changeToLoading = () => {
    console.log('loading')
    let newState = {
      ...this.state,
      DisplayLoading: true,
    }
    this.setState(newState);
  }
  render() {
    let display;
    if (this.state.Authed) {
      if (this.state.ConfigedAccount) {
        display = <ChatPage />
      } else {
        display = <ConfigPage />
      }
    } else {
      if (this.state.DisplayLoading) {
        display = <LoadingPage />
      } else {
        display = <SignIn changeToLoading={this.changeToLoading} />
      }

    }
    return (
      <div>
        {display}
      </div >
    );
  }
}

export default App;

