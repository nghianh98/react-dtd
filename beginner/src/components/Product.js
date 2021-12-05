import React, { Component } from "react"

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      check: true,
      name: "Nguyen Huu Nghia",
      product: [
        { id: 1, name: "1" },
        { id: 2, name: "2" }
      ]
    }
  }
  renderProduct = () => {
    return this.state.product.map((product, index) => (
      <div key={product.id}>{product.name}</div>
    ))
  }
  render() {
    return (
      <div>
        {this.state.check && (
          <React.Fragment>
            {/* <div>Create by {this.state.name}</div> */}
          </React.Fragment>
        )}
        {this.renderProduct()}
      </div>
    )
  }
}
