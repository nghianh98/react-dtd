import React, { Component } from "react"

export default class Footer2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Truyền function: onClick={this.click}",
      func: " click = () => {}",
      number: 0
    }
  }
  click = () => {
    this.setState(prevState => ({ number: prevState.number + 1 }))
  }
  render() {
    return (
      <div>
        <div>{this.state.func}</div>
        <div>{this.state.title}</div>
        <button onClick={this.click}>Click {this.state.number} times</button>
      </div>
    )
  }
}
