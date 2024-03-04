// import React from "react"
import "./App.css"
const Header =() =>{
  return(
    <>
      <div className="header">
        <div className="logo">
          <img src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
      <div className="App">
        <Header />
      </div>
  )
}

export default App
