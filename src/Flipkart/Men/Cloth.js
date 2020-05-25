import React from 'react'

const Cloth = ({ Clothes }) => {
    return (
        <>
            <div class=" container">
                <div class="row">
                    {Clothes.map(({ image, name,
                        assured,
                        price: { offerPrice, originalPrice, offer, size }

                    }) =>
                        <div class="col-sm-4">
                            <div class="card shadow mt-3  mb-5 bg-white rounded " style={{ width: '18rem', height: '32rem' }}>
                                <div class="card-body">
                                    <div class="row">
                                        <div className="col">
                                            <img src={image} height='300' width='250' />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <b>{name}</b>
                                    </div>
                                    <div class="row">
                                        <img src={assured} width="77px" height="21px" />
                                    </div>
                                    <div class="row">
                                        <div class="col"><b>{offerPrice}</b></div>
                                        <div><strike class="text-muted">{originalPrice}</strike></div>
                                        <div class="col"><p style={{ color: 'green' }}>{offer}</p></div>
                                    </div>
                                    <div class="row">
                                        <div class="col">Size:{size}</div>
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

export default Cloth