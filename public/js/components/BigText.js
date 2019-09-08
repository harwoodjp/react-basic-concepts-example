import React, { Component } from "react"

class BigText extends Component {
  constructor(props) {
    super()
    this.state = {}
  }
 
  componentDidMount() {
  	console.log("componentDidMount")
  }

	render() { // <h1>{this.props.num}</h1>
  	console.log(this.state)
		return (
			<div>
				<h1>{this.props.num == 0 ? "zero" : "one"}</h1>
			</div>
		)
	}
}

export default BigText