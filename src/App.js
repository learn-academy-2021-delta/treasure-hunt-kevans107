import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

  handleGamePlay = (index) => {
    // destructuring
    const { board } = this.state
    // index is the parameter
    board[index] = "🌴"
    this.setState({board: board})
  }

  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className="gameboard">
          {this.state.board.map((value, index) => {
          return (
            <Square 
              value={value} 
              index={index} 
              handleGamePlay={this.handleGamePlay}
            />
          )
        })}
        </div>
        
      </>
    )
  }
}
export default App


// Need the className="gameboard" to manipuate the overall style of the gameboard