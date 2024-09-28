import React from 'react'
import './Aside.css'

function Aside() {
    return (
        <aside>
            <h3>Total</h3>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Products</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table>
            <p>Subtotal: Rp 100.000,00</p>
        </aside>
    )
}

export default Aside