import React, { Component } from 'react'

class Counter extends Component{
    handleClick = () => {
        this.props.counterDecrement(this.props.index)
    }
    render(){
        return(
            <>
            <div 
            onClick={this.handleClick} 
            >
                <h2>Remaining Tries:{this.props.value}</h2>
            </div>
            </>
        )
    }
}

export default Counter