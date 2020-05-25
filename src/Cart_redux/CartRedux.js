import React, { useContext } from "react"
//import Header from '../CartWithHooks/Header'
import Loader from '../CartWithHooks/Loader'
import CartEmpty from '../CartWithHooks/CartEmpty'
import ItemCard from '../CartWithHooks/ItemCard'
import PriceCard from '../CartWithHooks/PriceCard'
import { CartContext } from '../Context/CartContext'

const CartRedux = () => {
    const {
        state: { cart, isAPILoaded }
    } = useContext(CartContext);
    return (
        <>
           
            {!isAPILoaded ? (<Loader/>) : (
                <div>
                    {!cart.length ? (<CartEmpty/>) :
                        (
                            <div className="row">
                                <div className="col-sm-9">
                                    <ItemCard/>
                                </div>
                                <div className="col ">
                                    <PriceCard/>
                                </div>
                            </div>
                        )}
                </div>
            )}
        </>
    )
}
export default CartRedux