import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';


function Square(props){
    
      return (
        <button className="square" onClick={props.onClick}>
          {props.value}
        </button>
      );
    
  }

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares:Array(9).fill(null),
            xIsNext:true,
            gameMode:props.mode,
            gridRow:props.row,
            gridColumn:props.column,
            startSymbol:props.symbol
        }
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
          }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({squares:squares, xIsNext:!this.state.xIsNext})
    }

    renderSquare(i) {
      return <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)} />;
    }
  
    render() {
        const winner = calculateWinner(this.state.squares);

        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          {this.state.gameMode},{this.state.gridRow},{this.state.gridColumn},{this.state.startSymbol}
        </div>
      );
    }
    }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  export default class Game extends React.Component {
    constructor(props){
      super(props);
      this.state={
        mode:props.mode,
        row:props.row,
        column:props.column,
        symbol:props.symb
      };
    }
    render() {
      return (
        <div className="game" align="center">
          <div className="game-board">
            <Board 
            mode={this.state.mode} 
            row={this.state.row} 
            column={this.state.column} 
            symbol={this.state.symbol}

            />
          </div>
          <div className="game-info">
            <div></div>
            
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(<Game />);