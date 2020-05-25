import React,{useContext} from 'react'
import {CartContext} from '../Context/CartContext'

const ItemDetails=({
    item:{
        image,
         itemName,
          actualPrice,
           offerPrice,
            off,
             quantity
    },
    index
})=> {
    const {decrementCounter, incrementCounter, deletedata }=useContext(CartContext)
    return (
        <>
             <div className="row">
                            <div className="col-sm-3">
                                <img src={image} height="80" width="100" />
                                <div>
                                    {!!quantity && (
                                        <button type="button" onClick={() => decrementCounter(index)} className="btn btn-sm "><img src="https://cdn1.iconfinder.com/data/icons/round-black-icons-2/78/minus-512.png" width="25px" height="25px" /></button>

                                    )}
                                &nbsp;
                        <span className="badge badge-white">{quantity}</span> &nbsp;
                        <button type="button" onClick={() => incrementCounter(index)} className="btn btn-sm "><img src="https://cdn1.iconfinder.com/data/icons/round-black-icons-2/78/plus-512.png" width="25px" height="25px" /></button>

                                </div>

                            </div>
                            <div className="col-sm-5">

                                <div className="row"><b>{itemName}</b></div>
                                <br />
                                <div className="row">Seller:RetailNet&nbsp;
                                           <span>
                                        <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png " width="77px" height="21px" />
                                    </span>
                                </div><br />
                                <div className="row">
                                    <b>&#8377;{offerPrice*quantity}</b>&nbsp;
                                    <span>
                                        <strike>{actualPrice}</strike>
                                    </span>&nbsp;&nbsp;
                                    <p>{off}off 2 offers available</p>
                                </div>
                                <div className="row">
                                    <div className="col-sm-7">
                                        <button className="btn btn-white font-weight-bold text-primary">
                                            SAVE FOR LATER
                                         </button>
                                    </div>
                                    <div className="col">
                                        <button onClick={() => deletedata(index)} className="btn btn-white font-weight-bold text-danger">
                                            REMOVE
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                Delivery by Sun May 17 | Free<strike>₹40</strike>
                                <p>10 Days Replacement Policy</p>
                            </div>
                        </div>  
        </>
    )
}
export default ItemDetails