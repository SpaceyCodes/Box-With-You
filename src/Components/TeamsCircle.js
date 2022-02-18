import React, { Component } from 'react';
import { fire } from '../fireConfig';


class TeamsCircle extends Component {

    render() {
        return (
            <div>
                <div style={circleStyle}>
                    <div style={plusStyle}>{this.props.content}</div>
                </div>
            </div>
        );
    }
}


const circleStyle = {
    margin: '5px',
    cursor: 'pointer',
    position: 'relative',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    backgroundColor: 'black'
}
const plusStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '20px',
    color: 'green',
}
export default TeamsCircle;

