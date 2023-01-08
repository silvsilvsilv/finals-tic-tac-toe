import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import { createTheme, ThemeProvider } from '@mui/material/styles';


function Square(props){
    // check whether this coordinate is a winnning coordinate
    let isWinnerCoord=false
    //checks whether the i,j coordinate corresponds to the winnercoord from checkWinner()  
    for(let i = 0; i<props.winCoord.length;i++){
        if(props.winCoord[i][0]===props.row && props.winCoord[i][1]===props.col){
          isWinnerCoord=true
        } 
    }
      return (
        <button 
        key={""+props.row+props.col} 
        className={(isWinnerCoord)?'square-winner':'square'} 
        onClick={(props.winner)?null:props.onClick}>
          {props.value}
        </button>
      );
    
  }

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares:Array(props.row).fill().map( () => Array(props.column).fill(null) ),
            currentTurn:props.symbol, 
            gameMode:props.mode,
            gridRow:props.row,
            gridColumn:props.column,
            lowestValue: Math.min(props.row, props.column),
            winner:null,
            status: "Welcome!",
            winnerCoord: [],
            pvp:(props.mode==='pvp'?true:false),
            pvc:(props.mode==='pvc'?true:false),
            cvc:(props.mode==='cvc'?true:false),
            computerTurn: (props.symbol==='X'?'O':'X'),
            boardReset:(props.reset===0?false:true) // what the computer will run as
        }
    }

    // usage: this.setState{...,currentTurn : nextTurn(this.state.currentTurn) }
    nextTurn(symbol) {
      return symbol==='X'?'O':'X'
    }
    
    handleClick(rowNum,colNum){
        const squares = this.state.squares.slice();
        console.log("adding to %d %d",rowNum, colNum)
        if (squares[rowNum][colNum] || this.state.winner) {
            return;
          }
        squares[rowNum][colNum] = this.state.currentTurn
        this.setState({squares:squares, currentTurn:this.nextTurn(this.state.currentTurn)})
        
    }

    renderSquare(rowNum,colNum) {
      return <Square 
      value={this.state.squares[rowNum][colNum]} 
      onClick={()=>this.handleClick(rowNum,colNum)} 
      winner={this.state.winner}
      row={rowNum}
      col={colNum}
      winCoord={this.state.winnerCoord}
      />;
    }

    handleBoardChange(prevState) {
      if (prevState.squares === this.state.squares) {
        return
      }
      const winner = checkWinner(this.state.squares,this.state.lowestValue);
      if (winner[0]) {
        if(winner[1]==="") {
          this.setState({status:`Tie!`});
        }else {
          this.setState({status:`Winner: ${winner[1]}`});
          console.log("Winner is %s with winning move %O",winner[1], winner[2]); 
        }
        this.setState({winner:winner[1], winnerCoord:winner[2]})
        return
      } else {
        this.setState({status :`Next player: ${(this.state.currentTurn)}`})
      }
      // for AI 
      // Check if it's ai's turn
      if(this.state.pvc && 
        ( 
        (this.state.computerTurn === this.state.currentTurn) || 
        (this.state.computerTurn === this.state.currentTurn)
        ) ) {
        // AI do the shet 
        this.moveAI(this.state.computerTurn);
      }
      
      if (this.state.cvc) {
        this.moveAI(this.state.currentTurn)
        }
      
     
    }

     

    moveAI(turn) {
      //AI shenanigans
      this.bitBetterAI(turn);
    }

    bitBetterAI(turn) {
      const squares = this.state.squares.slice();
      
      while(true) {
        // get random col and row
        let i = Math.floor(Math.random() * this.state.gridRow)
        let j = Math.floor(Math.random() * this.state.gridColumn)
        if(!squares[i][j]) {
          // just move here bich  
          squares[i][j] = turn
          this.setState({squares:squares, currentTurn:this.nextTurn(this.state.currentTurn)})
          // just move once la
          return;
        }
      }
    }

    // stupidAI(turn) {
    //   const squares = this.state.squares.slice();
    //   for (let i = 0; i < squares.length ; i++) {
    //     for (let j = 0; j < squares[i].length; j++) {
    //       if(!squares[i][j]) {
    //         // just move here bich
    //         squares[i][j]= turn
    //         this.setState({squares:squares, currentTurn:this.nextTurn(this.state.currentTurn)})
    //         // just move once la
    //         return;
    //       }
    //     }
    //   }
    // }
    

    componentDidUpdate(_, prevState) {
      this.handleBoardChange(prevState)
    }

    componentDidMount() {
      // handle first turn AI move
      if(this.state.pvc && 
        ( 
          (this.state.computerTurn === this.state.currentTurn) || 
          (this.state.computerTurn === this.state.currentTurn)
          )) {
        // AI do the shet 
        this.moveAI(this.state.computerTurn);
      }
     
      //for ai vs ai
      if (this.state.cvc) {
        this.moveAI(this.state.currentTurn)
      }

     
    }
  
    render() {       
        //for rendering of the square components
        const rows = []; 
            for (let i = 0; i < this.state.gridRow; i++) {
              const cols = [];
              for (let j = 0; j < this.state.gridColumn; j++) {
                cols.push(this.renderSquare(i, j));
              }
              rows.push(<div key={i} className="board-row">{cols}</div>);
            }
      return (
        <div>
          <div className="status">{this.state.status}</div>
          <div>{rows}</div>
        </div>
      );
    }
    }

  // function calculateWinner(squares) { ##### HARDCODED METHOD, OUTDATED ######
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  //   for (let i = 0; i < lines.length; i++) {
  //     const [a, b, c] = lines[i];
  //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //       return squares[a];
  //     }
  //   }
  //   return null;
  // }
  
  // function checkWinner(grid) {
  //   // loop through each cell in the grid
  //   for (let i = 0; i < grid.length; i++) {
  //     for (let j = 0; j < grid[i].length; j++) {
  //       // check if there are three consecutive cells with the same value
  //       // horizontally to the right
  //       if (j < grid[i].length - 2 &&
  //           grid[i][j] === grid[i][j + 1] &&
  //           grid[i][j + 1] === grid[i][j + 2]) {
  //         return grid[i][j];
  //       }
  //       // vertically downwards
  //       if (i < grid.length - 2 &&
  //           grid[i][j] === grid[i + 1][j] &&
  //           grid[i + 1][j] === grid[i + 2][j]) {
  //         return grid[i][j];
  //       }
  //       // diagonally downwards to the right
  //       if (i < grid.length - 2 && j <= grid[i].length - 2 &&
  //           grid[i][j] === grid[i + 1][j + 1] &&
  //           grid[i + 1][j + 1] === grid[i + 2][j + 2]) {
  //         return grid[i][j];
  //       }
  //       // diagonally downwards to the left
  //       if (i < grid.length - 2 && j > 2 &&
  //           grid[i][j] === grid[i + 1][j - 1] &&
  //           grid[i + 1][j - 1] === grid[i + 2][j - 2]) {
  //         return grid[i][j];
  //       }
  //     }
  //   }
  //   // if we get here, there were no consecutive cells with the same value
  //   return null;
  // }

  function checkWinner(grid, n) {
    console.log("checking winner for size %d",n)
    console.log("grid to check is %O",grid)
  
    // Check rows
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length - n + 1; j++) {
        
        if (grid[i][j]== null) {            
          
          continue
        }let consecutive = true;
        let referenceArray=[]; 
        for (let k = 0; k < n; k++) {
          referenceArray.push([i,j+k]);
          if (grid[i][j+k] !== grid[i][j]) {

            consecutive = false;
            break;
          }
        }
        if (consecutive) {
          
          return [true, grid[i][j],referenceArray]
        }
      }
    }
  
    // Check columns
    for (let i = 0; i < grid.length - n + 1; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        
        if (grid[i][j]== null) {
          
          continue
        }
        let consecutive = true;
        let referenceArray=[];
        for (let k = 0; k < n; k++) {
          referenceArray.push([i+k,j]);
          if (grid[i+k][j] !== grid[i][j]) {
            
            consecutive = false;
            break;
          }
        }
        if (consecutive) {
          
          return [true, grid[i][j],referenceArray]
        }
      }
    }
  
    // Check diagonals
    for (let i = 0; i < grid.length - n + 1; i++) {
      for (let j = 0; j < grid[i].length - n + 1; j++) {
        
        if (grid[i][j]== null) {
          
          continue
        }
        let consecutive = true;
        let referenceArray=[];
        for (let k = 0; k < n; k++) {
          referenceArray.push([i+k,j+k]);
          if (grid[i+k][j+k] !== grid[i][j]) {
            
            consecutive = false;
            break;
          }
        }
        if (consecutive) {
          
          return [true, grid[i][j],referenceArray]
        }
      }
    }
    for (let i = 0; i < grid.length - n + 1; i++) {
      for (let j = n - 1; j < grid[i].length; j++) {
        
        if (grid[i][j]== null) {
          
          continue
        }
        let consecutive = true;
        let referenceArray=[];
        for (let k = 0; k < n; k++) {
          referenceArray.push([i+k,j-k]);
          if (grid[i+k][j-k] !== grid[i][j]) {
            
            consecutive = false;
            break;
          }
        }
        if (consecutive) {
          
          return [true, grid[i][j],referenceArray]
        }
      }
    }

    // Check tie 
    let full=true;
    for (let i = 0; i < grid.length ; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if(!grid[i][j]) {
          full=false;
        }
      }
    }
    if(full) {
      return [true, "", []]
    }

    console.log("no match found")
  
    return [false, "", []]
  }
  
  export default class Game extends React.Component {
    constructor(props){
      super(props);
      this.state={
        mode:props.mode,
        row:props.row,
        column:props.column,
        symbol:props.symb,
        theme:props.theme,
        remainingPass:3,
        reset:props.reset,
      };
    }

    handlePass(){
      this.setState({remainingPass: (this.state.remainingPass-1)})
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
              reset={this.state.reset}
              />
          </div>
          <div className="game-info"><br/>
            <ButtonComponent theme={this.state.theme}/>
          </div>
        </div>
      );
    }
  }
  
  function ButtonComponent(){
      //TODO: Add pass button functionality
    return(
      <button onClick={()=>console.log('click')}>wkwkwkwk</button>
    )
  }
  // ========================================
  
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(<Game />);