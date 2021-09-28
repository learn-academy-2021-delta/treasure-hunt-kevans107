import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null,
    }
  }

  componentDidMount(){
    //don't have to render, runs automatically after the render()
    let treasure = Math.floor(Math.random() * 
    this.state.board.length)
    // Using math.floor because we are rounding down and want it to be within the length of the array
    let bomb = Math.floor(Math.random() * 
    this.state.board.length)
    this.setState({treasureLocation: treasure, bombLocation: bomb})

    
    
  }

  handleGamePlay = (index) => {
    // destructuring
    const { board, treasureLocation, bombLocation } = this.state
    if(treasureLocation === index){
      board[index] = "💎"
      this.setState({board: board})
    } else if(bombLocation === index){
      board[index] = "💣"
      this.setState({board: board})
    } else {
    // index is the parameter
    board[index] = "🌴"
    this.setState({board: board})
    }
  }

  render(){
    console.log("treasure:", this.state.treasureLocation)
    console.log("bomb:", this.state.bombLocation)
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className="gameboard">
          {this.state.board.map((value, index) => {
          return (
            <Square 
              value={value} 
              index={index} 
              key={index}
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