import React, { Component } from "react"

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      check: true,
      name: "Nguyen Huu Nghia",
      product: [
        { id: 1, name: "ios" },
        { id: 2, name: "android" }
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
      <React.Fragment>
        {this.state.check && (
          <>
            <div>Create by {this.state.name}</div>
          </>
        )}

        {!this.state.check && <p>False</p>}

        {this.renderProduct()}
      </React.Fragment>
    )
  }
}
