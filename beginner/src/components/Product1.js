import React, { Component } from "react"

export default class Product1 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    document.body.addEventListener("click", this.click)
  }
  click = event => {
    // eslint-disable-next-line
    console.log(event)
  }
  componentWillUnmount() {
    document.body.removeEventListener("click", this.click)
  }
  render() {
    return <div id="product">click event</div>
  }
}
