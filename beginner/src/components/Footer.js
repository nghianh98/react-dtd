import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Gọi hàm: onClick={() => this.click()}",
      func: "click() {}",
      number: 0
    }
  }
  click() {
    this.setState(prevState => ({ number: prevState.number + 1 }))
  }
  render() {
    return (
      <div>
        <div>{this.state.func}</div>
        <div>{this.state.title}</div>
        <button onClick={() => this.click()}>
          Click {this.state.number} times
        </button>
      </div>
    )
  }
}
Footer.propTypes = {
  name: PropTypes.object.isRequired,
  age: PropTypes.number.isRequired
}
