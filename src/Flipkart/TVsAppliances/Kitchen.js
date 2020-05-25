import React from 'react'

const Kitchen = ({ KitchenAppliance }) => {
    return (
        <>
            <div class="card shadow mt-5  mb-5 bg-white rounded container">
                <ul class="list-group list-group-flush">
                    {KitchenAppliance.map(({ img, name,
                        specifications,
                        price: { salePrice, originalPrice, offer },
                        rates: { rating, review, star }
                    }) =>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-sm-5">
                                    <div class="row"><img src={img} height='280' width='300' /></div>
                                    <br /><br /><br /><br />
                                    <div class="card-body">
                                        <button className="card-link btn-lg btn-warning text-white"><i class="fa fa-shopping-cart"></i>&nbsp;ADD TO CART</button>
                                        <button className="card-link btn-lg text-white" style={{ backgroundColor: 'Tomato' }}>BUY NOW</button>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row">
                                        <b>{name}</b>
                                        <p class="ml-4">
                                            <span class="badge badge-success mr-1">
                                                {star}
                                                <i class="fa fa-star-o"></i>
                                            </span>
                                            <span class="text-muted">{rating} {review} </span></p>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            {specifications.map(x =>
                                                <li>{x}</li>
                                            )
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <span><b>{salePrice}</b></span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <img
                                        src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png "
                                        width="77px" height="21px" /><br />

                                    <strike class="text-muted">{originalPrice}</strike>
                                    <p style={{ color: 'green' }}>{offer}</p>
                                </div>

                            </div>

                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default Kitchen