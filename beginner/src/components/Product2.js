import React, { Component } from "react"

export default class Product2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.interval = null
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ count: prevState.count + 1 }))
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return <div id="product">{this.state.count}</div>
  }
}
