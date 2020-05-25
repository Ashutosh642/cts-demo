import React from 'react'

const CartEmpty = () => {
    return (
        <div class="row d-flex justify-content-center">
            <div class="card" style={{ width: '18rem' }}>
                <div class="card-header">
                    <b>My Cart</b>
                </div>
                <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" height="300" width="300"
                    class="card-img-top" alt="..." />
                <div class="card-body">
                    <b>Missing Cart Items!!!</b>
                </div>
            </div>
        </div>
    )
}
export default CartEmpty