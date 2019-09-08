import React, { Component } from "react"

import BigText from "./BigText"
import SmallText from "./SmallText"


class App extends Component {
  constructor() {
    super()
    this.state = {
    	num: null, // render english 
    	big: null  // true = render h1, else span
    }
  }
 
  componentDidMount() {
  	console.log("componentDidMount")
  	const randNum = Math.floor(Math.random() * 2)
  	const isBig = Math.floor(Math.random() * 2)
  	this.setState({
  		num: randNum,
  		big: !!isBig
  	})
  }

	render() {
  	console.log(this.state)
		return (
			<div>
				{ this.state.num === 0 && this.state.big && <BigText num={this.state.num} /> }
				{ this.state.num === 1 && this.state.big && <BigText num={this.state.num} /> } 
				{ this.state.num === 0 && !this.state.big && <SmallText num={this.state.num} /> }
				{ this.state.num === 1 && !this.state.big && <SmallText num={this.state.num} /> }
			</div>
		)
	}
}

export default App