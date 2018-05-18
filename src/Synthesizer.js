import React, { Component } from 'react';
import Voice from './Voice.js';

class Synthesizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voices: [
                {
                    frequency: 440,
                    notes: [
                        {
                            startTime: 1000,
                            length: 3000
                        },
                        {
                            startTime: 5000,
                            length: 2500
                        }
                    ]
                },
                {
                    frequency: 880,
                    notes: [
                        {
                            startTime: 1500,
                            length: 2750
                        },
                        {
                            startTime: 5500,
                            length: 2000
                        }
                    ]
                }
            ]
        }
    }
  render() {
    return (
        <div>
        {this.state.voices.map((voice, index) => <Voice key={index} frequency={ voice.frequency } notes={ voice.notes }></Voice> )}
        </div>
        // generates a list of some notes to play in the future, and plays them
        // once they've all been played, generates another list, etc.
    );
  }
}

export default Synthesizer;
