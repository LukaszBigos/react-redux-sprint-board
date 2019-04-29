import React, { Component } from 'react';
import Board from '../Board/Board';

import './BoardsList.css';

export default class BoardsList extends Component {

  state = {
    boards: []
  };

  render() {
    return (
      <div className="boards-container">
        <button id="new-board">create new board</button>
        <Board />
      
      </div>
    )
  }
}
