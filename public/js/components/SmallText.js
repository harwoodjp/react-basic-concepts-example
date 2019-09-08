import React, { Component } from "react"

class SmallText extends Component {
  constructor() {
    super()
    this.state = {}
  }
 
  componentDidMount() {
  	console.log("componentDidMount")
  }

	render() { // <span>{this.props.num}</span>
  	console.log(this.state)
		return (
			<div>
				<span>{this.props.num == 0 ? "zero" : "one"}</span>
			</div>
		)
	}
}

export default SmallText