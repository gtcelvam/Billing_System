import React from 'react';

function Total({ count, amount }) {
    return (
            <tr id="total">
                <td>Total : {count} Items</td>
                <td></td>
                <td></td>
                <td>{amount} Rs</td>
            </tr>
    )
}

export default Total
