import React, { Component } from 'react'
import Square from './components/Square'
import Counter from './components/Counter'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null,
      counterClick: 5,
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

  counterDecrement = (number) => {
    const { board, counterClick } = this.state
    if(this.setState({board: board})){
      this.setState({counterClick: this.state.counterClick-1})
    } else if (counterClick === 0){
      return "Out of turns"
    } 
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
    console.log("counter:", this.state.counterClick)
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
        
        <div className="counter">{this.state.counterClick}
            <Counter 
              //value={value}
              counterDecrement={this.counterDecrement}
            />
        </div>
      </>
    )
  }
}
export default App


// Need the className="gameboard" to manipulate the overall style of the gameboard