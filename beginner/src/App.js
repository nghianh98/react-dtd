import "./App.css"
import { useState } from "react"
import Header from "./components/Header"
import Product from "./components/Product"
import Product1 from "./components/Product1"
import Product2 from "./components/Product2"
import Footer from "./components/Footer"
import Footer2 from "./components/Footer2"
import Footer3 from "./components/Footer3"

function App() {
  const data = {
    firstName: "Nguyen",
    lastName: "Huu Nghia"
  }
  const [state, setState] = useState(true)
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="product">
        <p>Current state: {String(state)}</p>
        <button onClick={() => setState(state => !state)}>Change State</button>
        {state && <Product />}
        {state && <Product1 />}
        {state && <Product2 />}
      </div>
      <div className="footer">
        <Footer name={data} age={23} />
        <Footer2 />
        <Footer3 />
      </div>
    </div>
  )
}

export default App
