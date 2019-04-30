import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
  render () {
  const { name, id } = this.props;
    return (
      <div className="board">
        <h3>{name}</h3>
        <h4>{id}</h4>
      </div>
    );
  }


};

export default Board;
