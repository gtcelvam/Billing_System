import React, { useEffect, useState,useContext} from 'react'
import {UserContext} from "./cart"
import Total from "./total"
import CartList from "./cartList"
import Axios from "axios"
import "./cart.css"


function Invoice() {
    const data = useContext(UserContext);
    const {amount,items} = data
    const [user, setUser] = useState([]);
    useEffect(async () => {
        const result = await Axios.get("https://api.randomuser.me/")
        await setUser(result.data.results);
        document.title = "Invoice"
    }, []);
    var cartItems = items.map((item,index)=>{
        return(
                <CartList key={index} index={index} item={item}/>
        )
    });
    const invoice = user.map((item) => {
        return (
            <div key="1" className="main">
                    <h1 style={{backgroundColor:"rgb(86, 135, 241)",color: "white"}}>TS Shop- Invoice</h1>
                    <div className="invoice">
                    <div className="user-detail">
                        <p><span>Username : </span>{item.login.username}</p>
                        <p><span>Gender : </span>{item.gender}</p>
                        <p><span>Email : </span>{item.email}</p>
                        <p><span>Phone : </span>{item.phone}</p>
                    </div>
                    <div className="username">
                        <p>{item.name.title + ". " + item.name.first} <span style={{ color: "red" }}>{item.name.last}</span></p>
                    </div>
                    <div className="user-profile">
                        <img src={item.picture.large} alt={item.name.first} />
                    </div>
                </div>
                <div className="bill">
                    <div className="company-details">
                        <div>
                            <p>Date : {new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }).split(',')[0]}</p>
                        </div>
                        <div>
                            <address>
                                Thamarai Selvan <br />
                            Written by <a href="mailto:gtcelan@.gmailcom">TS SHOP</a>.<br />
                            Visit us at:<br />
                            Example.com<br />
                            Chennai,<br />
                            Tamilnadu
                        </address>
                        </div>
                    </div><hr/>
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
            <Total key={items.length+1} count={items.length} amount={amount}/>
            </tbody>
            </table>
            <h1>Thanks, Visit Again</h1>
            </div>
            </div>
        )
    });
    return (
        <div>
            {user.length === 0 ? "Loading..." : invoice}
        </div>
    )
}

export default Invoice
