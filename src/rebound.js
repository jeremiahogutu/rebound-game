import React, {Component} from 'react';

class Rebound extends Component {
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
