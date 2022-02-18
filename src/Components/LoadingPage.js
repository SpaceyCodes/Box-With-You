import React, { Component } from 'react';

class SignIn extends Component {
    render() {
        return (
            <div>
                <div style={contentBlockStyle}>
                    <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif' width='100%' />
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
const loader = {
    border: '16px solid #f3f3f3', /* Light grey */
    borderTop: '16px solid #3498db', /* Blue */
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    animation: 'spin 2s linear infinite',
}
export default SignIn;

