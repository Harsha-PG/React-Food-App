// import React from "react"
import "./App.css"

const RestList = {
  avgRating: 4.3,
  cloudinaryImageId:"092e58460657922e098a8afd5db838fe",
  costForTwo: "₹400 for two",
  cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  id :  "124436",
  restname: "Domino's Pizza",
  parentId: "2456"
 }
const Header =() =>{
  return(
    <>
      <div className="header">
        <div className="logo">
          <img src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"/>
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

const Body =() =>{
  return(
    <div className="body">
      <div>
        <h3>Search Rest comp</h3>
      </div>
      <div className="rest-container">
        <RestaurantCard RestaurantList={RestList}/>
        <RestaurantCard RestaurantList={RestList}/>
        <RestaurantCard RestaurantList={RestList}/>
      </div>
    </div>
  )
}

const RestaurantCard = ({RestaurantList}) =>{
  const {restname, avgRating, cuisines, cloudinaryImageId} = RestaurantList
  return(
    <div className="rest-card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
      <h2>{restname}</h2>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>ETA</h4>
    </div>
  )
}
function App() {
  return (
      <div className="App">
        <Header />
        <Body />
      </div>
  )
}

export default App
