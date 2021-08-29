import logo from "./logo.svg"
import "./App.css"
import Footer from "./components/Footer"
import Footer2 from "./components/Footer2"
import Footer3 from "./components/Footer3"
import Product from "./components/Product"

function App() {
  const data = {
    firstName: "Nguyen",
    lastName: "Huu Nghia"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="product">
        <Product />
      </div>
      <Footer name={data} age={23} />
      <Footer2></Footer2>
      <Footer3></Footer3>
    </div>
  )
}

export default App
