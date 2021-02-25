import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

  handleGamePlay = (index) => {
    const { square } = this.state
    // 
    
  }

  render(){
    console.log(this.state.squares)
    return(
      <>
        <h1>Tic Tac Toe</h1>
          <div className="gameBoard">
          { this.state.squares.map((value, index) => {
            return ( 
              <Square 
                value={ value }
                index={ index }
                key={ index }
                />
            )
          })}
        </div>
        
      </>
    )
  }
}
export default App
