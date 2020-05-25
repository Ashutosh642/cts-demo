import React from 'react'

const Toy = ({ Toys }) => {
    return (
        <>
            <div class="container">
                <div class="row">
                    {Toys.map(({ image, name,
                        assured,

                        price: { originalPrice, offerPrice, offer, ages },
                        rates: { rating }


                    }) =>
                        <div class="col-sm-4">
                            <div class="card shadow mt-3  mb-5 bg-white rounded " style={{ width: '18rem', height: '32rem' }}>
                                <div class="card-body">
                                    <div class="row">
                                        <div className="col">
                                            <img src={image} height='270' width='250' />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <b>{name}</b>

                                    </div>
                                    <div class="row">
                                        <p class="ml-4">
                                            <span class="badge badge-success mr-1">
                                                {rating}
                                                <i class="fa fa-star-o"></i>
                                            </span></p>
                                        <img src={assured} width="77px" height="21px" />
                                    </div>
                                    <div class="row">
                                        <div class="col"><b>{offerPrice}</b></div>
                                        <div><strike class="text-muted">{originalPrice}</strike></div>
                                        <div class="col"><p style={{ color: 'green' }}>{offer}</p></div>
                                    </div>
                                    <div class="row">
                                        <div class="col">Ages:{ages}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-7">
                                            <button className="card-link btn-sm btn-warning text-white">
                                                <i class="fa fa-shopping-cart"></i>&nbsp;ADD TO CART</button>
                                        </div>
                                        <div class="col">
                                            <button className="card-link btn-sm text-white" style={{ backgroundColor: 'Tomato' }}>
                                                BUY NOW</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}

export default Toy