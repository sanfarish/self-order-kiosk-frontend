import React from 'react'
import './Aside.css'

function Aside() {
    return (
        <aside>
            <h3>Total</h3>
            <table>
                <tr>
                    <th>No</th>
                    <th>Products</th>
                    <th>Qty</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Product 1</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Product 2</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Product 3</td>
                    <td>1</td>
                </tr>
            </table>
            <p>Subtotal: Rp 100.000,00</p>
        </aside>
    )
}

export default Aside