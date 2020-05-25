import React,{useContext} from 'react'
import {CartContext} from '../Context/CartContext'


const PriceCard = () => {
    const {state:{cart,totalAmount}}=useContext(CartContext)
    return (
        <>
            <div class="card shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem' }}>
                <div>
                    <b>PRICE DETAILS</b>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div className="row">
                            <div className="col-sm-8">
                                Price({cart.length}item)
                            </div>
                            <div className="col">
                                <b>&#8377; {totalAmount}</b>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-8">
                                Delivery Fee
                            </div>
                            <div className="col">
                                <p className="text-success"> Free</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <div className="col-sm-8">
                                <b>Total Amount</b>
                            </div>
                            <div className="col">
                                <b>&#8377; {totalAmount}</b>
                            </div>
                        </div>


                    </li>
                    <li class="list-group-item"><p className="text-success">You will save ₹2,996 on this order</p></li>
                </ul>
            </div>
        </>
    )
}
export default PriceCard