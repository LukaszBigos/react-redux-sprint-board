import React, { Component } from "react";
import uuid from "uuid";

import Board from "../Board/Board";

import "./BoardsList.css";

export default class BoardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [{id: uuid(), name: '1st board'}, {id: uuid(), name: '2nd board'}],
      id: uuid(),
      name: '',
      showForm: false
    };
  }

  openAddingForm = () => {
    this.setState({
      showForm: true
    });
  }

  hideAddingForm = () => {
    this.setState({
      showForm: false
    });
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    
    const newBoard = {
      id: this.state.id,
      name: this.state.name
    }

    const updatedBoards = [...this.state.boards, newBoard];
    console.log(updatedBoards);

    this.setState({
      name: '',
      boards: updatedBoards,
    });

  };

  render() {
    const newBoardForm = (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="create new board" onChange={this.handleChange} value={this.state.name}/>
        <button onClick={this.hideAddingForm}>cancel</button>
        <button>add board</button>
      </form>
    );

    return (
      <React.Fragment>
        <div className="boards-container">
          <button id="new-board" onClick={this.openAddingForm}>
            create new board
          </button>

          {/*  below place for mapping all boards to display  */}
          {this.state.boards.map( board => {
            return <Board key={board.id} name={board.name} id={board.id}/>
          })}
        </div>
        {this.state.showForm ? newBoardForm : null}
      </React.Fragment>
    );
  }
}
