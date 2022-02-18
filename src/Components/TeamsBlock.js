import React, { Component } from 'react';
import { fire } from '../fireConfig';
import TeamsCircle from './TeamsCircle';
import './style.css'
class TeamsBlock extends Component {
    state = {
        teamsOrder: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    }
    render() {
        return (
            <div style={parentStyle} >
                <div style={teamsBlockStyle} id='parentDiv'>
                    <div>
                        <div style={circleStyle}>
                            <div style={plusStyle}>+</div>
                        </div>
                    </div>

                    {this.state.teamsOrder.map((lol) => {
                        console.log(lol)
                        return (
                            <TeamsCircle content={lol} />
                        )
                    })}

                </div>
            </div>
        );
    }
}
const parentStyle = {
    height: '100%',
}
const teamsBlockStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
    display: 'flex',
    flexDirection: 'column-reverse',
    overflow: 'scroll',
}
const circleStyle = {
    cursor: 'pointer',
    position: 'relative',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    backgroundColor: 'black',
    margin: '5px',
}
const plusStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '20px',
    color: 'green',
}
export default TeamsBlock;

