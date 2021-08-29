import React, { Component } from "react"

const fetchApi = () => Promise.resolve(100)

export default class Product3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }
  componentDidUpdate() {
    fetchApi().then(res => {
      this.setState({
        count: res
      })
    })
    // eslint-disable-next-line
    console.log(this.state.count)
  }
  render() {
    return (
      <div id="product">
        <button onClick={this.handleClick}>Increase</button>
        <div>Count: {this.state.count}</div>
      </div>
    )
  }
}
