import React, {Component} from 'react';
import {init} from "./reboundHelper";

class Rebound extends Component {
    componentDidMount() {
        window.addEventListener('load', init);
        window.addEventListener('resize', init)
    }

    render() {
        return (
            <div id="playingArea">
                <div id="paddle"></div>
                <div id="ball"></div>
                <div id="score">
                    score: 0
                </div>
            </div>
        );
    }
}

export default Rebound;
