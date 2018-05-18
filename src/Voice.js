import React, { Component } from 'react';

class Voice extends Component {
  constructor(props) {
    super(props);

    let context = new (window.AudioContext || window.webkitAudioContext)();
    let oscillator = context.createOscillator();
    let gainNode = context.createGain();
    gainNode.gain.value = 0;

    oscillator.type = 'triangle';
    oscillator.frequency.value = this.props.frequency;

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    this.state = {
      playing: false,
      context: context,
      oscillator: oscillator,
      gainNode: gainNode,
      notes: []
    };
  }
  
  play(length) {
    this.setState({ playing: true});
    this.gain.linearRampToValueAtTime(1, this.context.currentTime + length/2.0);
    this.gain.linearRampToValueAtTime(0, this.context.currentTime + length);
    this.oscillator.start(this.context.currentTime);
    this.oscillator.stop(this.context.currentTime + length);
  }

  render() {
    if (!this.playing) {
      let nextNote = null;
      let index = 0;
      while(!nextNote && index < this.props.notes.length) {
        const note = this.props.notes[index]
        if (note.startTime > this.context.currentTime) {
          nextNote = note
        }
        index += 1;
      }
      if (nextNote) {
        this.play(nextNote.length);
      }
    }


    return (
      <div className="note"></div>
    );
  }
}

export default Voice;
