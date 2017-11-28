import React from 'react'

class GameBoard extends React.Component {
  state = {
    pegs: ['peg','peg','peg','peg']
  };


  render() {
    return (
      <div>
        This is the GameBoard
        <ul>
          {this.state.pegs.map((peg, idx) => <li key={idx}>peg</li>)}
        </ul>
      </div>
    )
  }

}

export default GameBoard;