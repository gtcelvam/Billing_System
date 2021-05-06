import React from 'react'



function CartList({item,index}) {
    return (
        <tr>
            <td>{index+1}.</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price} Rs</td>
        </tr>
    )
}

export default CartList
