import React, { Component } from 'react';
import Voice from './Voice.js';

class Synthesizer extends Component {
    constructor(props) {
        super(props);
        let context = new (window.AudioContext || window.webkitAudioContext)();
        
        let voiceFrequencies = []
        const octaves = [220, 440, 880]
        const ratios = [ 1 / 3, 2 / 3, 1 / 4, 3 / 4, 2 / 5, 4 / 5, 2 / 7, 4 / 7, 1 / 8, 5 / 8, 7 / 8]
        octaves.forEach((octave) => ratios.forEach((ratio) => voiceFrequencies.push( octave * ratio)))
        this.state = {
            context: context,
            voiceFrequencies: voiceFrequencies
        }
    }
  render() {
    return (
        <div>
        {this.state.voiceFrequencies.map((freq, index) => 
            <Voice 
            key={index} 
            frequency={ freq } 
            context={this.state.context}></Voice> )}
        </div>
    );
  }
}

export default Synthesizer;
