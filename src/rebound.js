import React, {Component, Fragment} from 'react';
import {init} from "./reboundHelper";

class Rebound extends Component {
    componentDidMount() {
        window.addEventListener('load', init);
        window.addEventListener('resize', init)
    }

    render() {
        return (
            <Fragment>
                <div id="playingArea">
                    <div id="paddle"></div>
                    <div id="ball"></div>
                    <div id="score">
                        score: 0
                    </div>
                </div>
                <div id="controls">
                    <h3>settings</h3>
                    <button id="new">New Game</button><br/>
                    <select size="1" id="difficulty">
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select><br/>
                    <button id="done">Done</button>
                </div>
                <button id="gear">&#9881;</button>
            </Fragment>
        );
    }
}

export default Rebound;
