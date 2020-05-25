import React, { useState, useEffect } from "react"
import Header from './Header'
import Loader from './Loader'
import CartEmpty from './CartEmpty'
import ItemCard from './ItemCard'
import PriceCard from './PriceCard'

const CartWithHooks = () => {


    const [cart, setCart] = useState([])
    const [isAPILoaded, setIsAPILoaded] = useState(false)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        fetch('https://jsonblob.com/api/a549ce7a-94f4-11ea-9b86-85b58282e959')
            .then(res => res.json())
            .then(json => {
                setTimeout(() => {
                    setCart([...json])
                    setIsAPILoaded(true)

                }, 2000)

            })

    }, []);

    useEffect(() => {

        setTotalAmount(cart.reduce((acc, item) => acc + parseInt(item.offerPrice) * item.quantity, 0))

    }, [cart])

    const decrementCounter = (index) => {
        cart[index].quantity--
        setCart([...cart])
    }

    const incrementCounter = (index) => {
        cart[index].quantity++
        setCart([...cart])
    }

    const deletedata = (index) => {

        setCart([...cart.slice(0, index), ...cart.slice(index + 1)])

    }

    return (
        <>
            <Header />

            {!isAPILoaded ? (<Loader />) : (

                <div>
                    {!cart.length ? (<CartEmpty />) :
                        (
                            <div className="row">

                                <div className="col-sm-9">
                                    <ItemCard
                                        cart={cart}
                                        decrementCounter={decrementCounter}
                                        incrementCounter={incrementCounter}
                                        deletedata={deletedata}
                                    >
                                    </ItemCard>
                                </div>

                                <div className="col ">

                                    <PriceCard totalAmount={totalAmount}></PriceCard>

                                </div>

                            </div>

                        )}

                </div>

            )}
        </>
    )

}
export default CartWithHooks