import { useState } from "react";
import "./App.css";

function Navbar(props) {
  let cartNo = props.cartNo
  return(
    <>
    <div className="navcontainer">
      <h2>Start Bootstrap</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
      </ul>
      <div className="cart">
        <button className="two">cart <span className="cartNo">{cartNo}</span></button>
      </div>
    </div>
    </>
  )
}

function Product(props) {
  let img = "https://via.placeholder.com/250x300";
  let name = props.value.name;
  let price = props.value.price;
  let cartName = (!props.value.addedToCart)? "Add to cart" : "Remove";

const handleClick = () => {
  console.log(cartName);
  if(cartName === "Add to cart") props.parentCallBack(1, name)
  else props.parentCallBack(-1, name)
}

  return(
    <div className="card">
      <img src={img} alt="place" />
      <h2>{name}</h2>
      <p>{price}</p>
      <button className="one" onClick={handleClick}>{cartName}</button>
    </div>
  )
}

function App() {
  const [items] =useState([
    {name: "Fancy Product",
     price:"$40.00 - $80.00",
     addedToCart:false},
    {name:"Special Item",
    price:"$18.00",
    addedToCart:false},
    {name:"Sale Item",
    price:"$25.00",
    addedToCart:false},
    {name:"Popular Product",
    price:"$40.00",
    addedToCart:false},
    {name:"Sale Item",
    price:"$25.00",
    addedToCart:false},
    {name:"Popular Product",
    price:"$40.00",
    addedToCart:false},
    {name: "Fancy Product",
    price:"$120.00 - $280.00",
    addedToCart:false},
    {name:"Special Item",
    price:"$18.00",
    addedToCart:false}
  ])

  const [cartNo, setcartNo] = useState(0);

  const callBackSet = (data,name)=> {
  setcartNo(cartNo + data)
  console.log(name)
  items.map((it)=>{
    if(name === "it.name") it.addedToCart = !it.addedToCart;
    return it;
  })
}
  return(
    <div className="App">
      <Navbar cartNo={cartNo} />
      <div className="cardContainer">
        {items.map(item => {
          return <Product value={item} parentCallBack={callBackSet} />
        })}
      </div>
    </div>
  );
}

export default App;