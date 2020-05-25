import React from 'react'

const LibraryBook = ({ Book }) => {
    return (
        <>
            <div class="container">
                <div class="row">
                    {Book.map(({ productImg, productName,
                        productPrice: { actualPrice, cutOffPrice, offer },
                        productRatings: { starRating, totalRating, totalReviews }


                    }) =>
                        <div class="col-sm-4">
                            <div class="card shadow mt-3  mb-5 bg-white rounded " style={{ width: '20rem', height: '33rem' }}>
                                <div class="card-body">
                                    <div class="row">
                                        <div className="col">
                                            <img src={productImg} height='300' width='250' />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <b>{productName}</b>
                                        <p class="ml-4">
                                            <span class="badge badge-success mr-1">
                                                {starRating}
                                                <i class="fa fa-star-o"></i>
                                            </span>
                                            <span class="text-muted">{totalRating}Rating, {totalReviews}Reviews </span></p>
                                        <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png" width="77px" height="21px" />
                                    </div>

                                    <div class="row">
                                        <div class="col"><b>{cutOffPrice}</b></div>
                                        <div><strike class="text-muted">{actualPrice}</strike></div>
                                        <div class="col"><p style={{ color: 'green' }}>{offer}</p></div>
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

export default LibraryBook