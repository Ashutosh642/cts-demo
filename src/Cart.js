import React, { Component } from "react"
class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: [],
            isAPILoadedd: false,
            totalAmount: 0
        }

    }

    componentDidMount() {
        fetch('https://jsonblob.com/api/a549ce7a-94f4-11ea-9b86-85b58282e959')
            .then(res => res.json())
            .then(json => {
                setTimeout(() => {
                    this.setState({
                        cart: [...json],
                        isAPILoaded: true
                    })
                }, 2000)

            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.cart != this.state.cart) {
            this.setState({
                totalAmount: this.state.cart.reduce((acc, item) => acc+ parseInt(item.offerPrice)*item.quantity, 0)
            })
        }

    }


    decrementCounter(index){
        let {cart}=this.state
        cart[index].quantity--
        this.setState({cart:[...cart]})
    }

    incrementCounter(index){
        let {cart}=this.state
        cart[index].quantity++
        this.setState({cart:[...cart]})
    }

    deletedata(index) {
        const { cart } = this.state;
        this.setState({
            cart: [...cart.slice(0, index), ...cart.slice(index + 1)]
        })

    }


    render() {
        const { cart, isAPILoaded, totalAmount } = this.state;
        return (
            <>
            
                <div className="row bg-primary my-3" >
                    <div class="col">
                        <img src="https://static.couponspy.in/picture/shop/240.JPG" height="80" width="100" />
                    </div><div class="col mt-4">
                        <form action="" method="get">
                            <div class="input-group">
                                <input type="text" name="username" class="form-control" placeholder="Search for products,brands and more" />
                                <button type="submit">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="col mt-3">
                        <nav class="navbar-expand-sm navbar-light ">
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#xx">
                                <span class="navbar-toggler-icon"> </span>
                            </button>
                            <div class="collapse navbar-collapse " id="xx">
                                <ul class="navbar-nav">
                                    <li class="nav-item"><a href="#" class="nav-link text-light"><button class="btn-sm btn-light text-primary">Login</button></a>
                                    </li><li class="nav-item"><a href="#" class="nav-link text-light">More</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link text-light"><i class="fa fa-shopping-cart"></i>Cart</a></li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
                {!isAPILoaded ? (<img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp?cid=ecf05e473a4f51a490adf0dee26169fe99ed2bfc1fbfccb9&rid=giphy.webp" />) : (

                    <div>
                        {!cart.length ? (
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

                        ) : (
                                <div className="row">

                                    <div className="col">
                                        {cart.map(({ image, itemName, actualPrice, offerPrice, off,quantity }, index) =>
                                            <div class="card text-left" style={{ width: '55rem' }}>
                                                <div class="card-header">
                                                    <div className="float-left">
                                                        My cart(1)
                            </div>
                                                    <div className="float-right">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL
                            3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PG
                            cgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0i
                            OSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMi
                            IvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtM
                            S45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0Y
                            TIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAx
                            Ljg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0z
                            LjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wN
                            DggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzL
                            jEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" />
                            <span >Deliver to</span>&nbsp;&nbsp;

                            <input type="text" value="Hyderabad-501401" />
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5v
                            cmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjUiPjxwYXRoIGZpbGw9IiMyMTIxMjEi
                            IGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTS4yMjcuNzAzQy0uMTY4LjMxNS0uMDMyIDAgLjUxN
                            CAwaDcuOTY1Yy41NTYgMCAuNjg1LjMxNy4yOTguNjk4TDcuNjQgMS44MThsLTIuNDI3IDIuMzlh
                            MS4wMiAxLjAyIDAgMCAxLTEuNDI3LS4wMDNMLjIyNy43MDN6Ii8+PC9zdmc+"/>

                                                    </div>

                                                </div>
                                                <div class="card-body">

                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <img src={image} height="80" width="100" />
                                                            <div>
                                                                {!!quantity && (
                                                                    <button type="submit" onClick={() => this.decrementCounter(index)} className="btn btn-sm "><img src="https://cdn1.iconfinder.com/data/icons/round-black-icons-2/78/minus-512.png" width="25px" height="25px" /></button>

                                                                )}
                                                    &nbsp;
                        <span className="badge badge-white">{quantity}</span> &nbsp;
                        <button type="submit" onClick={() => this.incrementCounter(index)} className="btn btn-sm "><img src="https://cdn1.iconfinder.com/data/icons/round-black-icons-2/78/plus-512.png" width="25px" height="25px" /></button>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-5">

                                                            <div className="row"><b>{itemName}</b></div>
                                                            <div className="row">Black,Push button</div><br />
                                                            <div className="row">Seller:RetailNet&nbsp;
                                           <span>
                                                                    <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png " width="77px" height="21px" />
                                                                </span>
                                                            </div><br />
                                                            <div className="row">
                                                                <b>&#8377;{offerPrice}</b>&nbsp;
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
                                                                    <button onClick={() => this.deletedata(index)} className="btn btn-white font-weight-bold text-danger">
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

                                                </div>
                                                <div class="card-footer ">

                                                    <div className="col">
                                                        <a href="#" class="btn  float-right text-white" style={{ backgroundColor: 'Tomato' }}>PLACE ORDER</a>
                                                    </div>

                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="col">

                                        <div class="card" style={{ width: '18rem' }}>
                                            <div class="card-header">
                                                PRICE DETAILS
                                        </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">
                                                    <div className="row">
                                                        <div className="col-sm-8">
                                                            Price(1 item)
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

                                    </div>

                                </div>
                                
                            )}
                            
                    </div>
                    
                )}
            </>
        )
    }
}
export default Cart