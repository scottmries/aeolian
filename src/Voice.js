import React, { Component } from 'react';

class Voice extends Component {

  generateNotes(offset) {
    let startTime = offset;
    let notes = [];
    for (var i = 0; i < 100; i++) {
      const wait = (Math.floor(Math.random() * 50000) + 5000) / 1000
      const length = (Math.floor(Math.random() * 12500) + 1000) / 1000
      notes.push({
        startTime: startTime,
        length: length
      })
      startTime += wait + length
    }
    console.log(notes)
    return { notes: notes, notesEndTime: startTime }
  }

  constructor(props) {
    super(props);

    let oscillator = this.props.context.createOscillator();
    let gainNode = this.props.context.createGain();
    gainNode.gain.value = 0;

    oscillator.type = 'triangle';
    oscillator.frequency.value = this.props.frequency;
    oscillator.start()

    oscillator.connect(gainNode);
    gainNode.connect(this.props.context.destination);

    const initialOffset = Math.floor(Math.random() * 50000) / 1000
    const notes = this.generateNotes(initialOffset);

    // call generatenotes again with a now offset after the context current time has passed notesEndTime
    
    this.state = {
      playing: false,
      oscillator: oscillator,
      gainNode: gainNode,
      notesEndTime: notes.notesEndTime,
      notes: notes.notes
    };
  }
  
  scheduleNotes() {
    this.state.notes.forEach((note) => {
      this.state.gainNode.gain.setValueAtTime(0, note.startTime)
      this.state.gainNode.gain.linearRampToValueAtTime(0.1, note.startTime + note.length / 2);
      this.state.gainNode.gain.linearRampToValueAtTime(0, note.startTime + note.length)
    })
  }

  render() {
    this.scheduleNotes()
    return (
      <div className="note"></div>
    );
  }
}

export default Voice;
