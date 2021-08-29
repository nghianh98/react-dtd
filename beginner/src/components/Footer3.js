import React, { Component } from "react"

export default class Footer3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Assign a number: onClick={() => this.click(2)}",
      func: "click = value => {}",
      number: 0
    }
  }
  click = value => {
    this.setState({ number: value })
  }
  render() {
    return (
      <div>
        <div>{this.state.func}</div>
        <div>{this.state.title}</div>
        <button onClick={() => this.click(2)}>
          Assign {this.state.number}
        </button>
      </div>
    )
  }
}
