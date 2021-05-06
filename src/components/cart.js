import React, { useState, useEffect,createContext } from 'react'
import { Link } from "react-router-dom"
import CartList from './cartList'
import Total from "./total"
import "./cart.css"
export const UserContext = createContext();
var selectedItems = {
    name: "",
    quantity: 0,
    price: 0
}
var data ={
    amount : 0,
    items : []
}
function Cart() {
    const [amount, setAmount] = useState(0);
    const [items, setItems] = useState([]);
    const [warning, setWarning] = useState(false);
    var warStyle = {
        color : "red",
        display : "block"
    }
    var cartItems = items.map((item, index) => {
        return (
            <CartList key={index} index={index} item={item} />
        )
    });
    useEffect(() => {
        handleTotal();
        setInterval(()=>{
            setWarning(false)
        },2000)
    }, [items]);
    var handleSubmit = (e) => {
        e.preventDefault();
        var name = document.getElementById("name").value
        var quantity = document.getElementById("quantity").value
        var price = document.getElementById("price").value
        if(name===""||(quantity === "" || price === "")){
            setWarning(true);
        }else{
            setItems([...items, selectedItems]);
            selectedItems = {
                name: "",
                quantity: "",
                price: ""
            }
        }
        console.log(warning);
        document.getElementById("name").value = selectedItems.name;
        document.getElementById("quantity").value = selectedItems.quantity;
        document.getElementById("price").value = selectedItems.price;
    }
    var handleTotal = () => {
        var price = items.map(item => {
            var num = parseInt(item.price);
            return num;
        })
        var sum = price.reduce((a, b) => {
            return a + b;
        }, 0);
        setAmount(sum);
        data.amount = sum;
        data.items = items;
    }
    return (
        <div className="cart">
            <h1>Add to Cart</h1>
            <form action="">
                <label htmlFor="">Item Name : </label>
                <input id="name" type="text" onChange={e => selectedItems.name = e.target.value} />
                <label htmlFor="">Quantity : </label>
                <input id="quantity" type="number" onChange={e => selectedItems.quantity = e.target.value} />
                <label htmlFor="" >Price : </label>
                <input id="price" type="number" onChange={e => selectedItems.price = e.target.value} />
                <button onClick={handleSubmit}>Add</button>
            </form>
            <h1 className="alert" style={warning === true ? warStyle : {display : "none"}}>Please add proper value</h1>
            <div style={items.length === 0 ? { display: "none" } : null} className="cardlist">

                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                        <Total key={items.length + 1} count={items.length} amount={amount} />
                    </tbody>
                </table>
                <Link to="/invoice">
                    <button className="btn-buy">Buy</button>
                </Link>
            </div>
        </div>
    )
}
export default Cart


export function UserContextProvider(props){
    return(
        <UserContext.Provider value={data}>
            {props.children}
        </UserContext.Provider>
    )
}
