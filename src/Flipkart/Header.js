import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
const Header = () => {
    return (
        <>
            <div class=" row bg-primary fixed-top " style={{ height: '11%' }}>
                <div class="col-sm-3 ml-5"> <Link to="/home">
                    <img src="https://static.couponspy.in/picture/shop/240.JPG" height="70" width="100" /></Link></div>
                <div class="col-sm-5 mt-3">
                    <form action="" method="get">
                        <div class="input-group">
                            <input type="text" name="username" class="form-control" placeholder="Search..." />
                            <button type="submit">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col text-light ml-5  mt-3"><Link to="/signup"><button class="btn-sm btn-light text-primary">
                Login</button></Link></div>
                <div class="col text-light  mt-3">More</div>
                <div class="col text-light  mt-3"><i class="fa fa-shopping-cart"></i><Link to="/cart"><span class="text-light">Cart</span></Link></div>
            </div>

            <div class="shadow p-2 mb-4 bg-white rounded">
                <div class=" row mt-5 py-4">
                    <div class="col-sm-2">  <Link to="/electronics"><b class="text-dark">Electronics</b></Link></div>
                    <div class="col-sm-2"> <Link to="/tvAppliance"><b class="text-dark">TVs & Appliances</b></Link></div>
                    <div class="col-sm-2"> <Link to="/men"><b class="text-dark">Men</b></Link></div>
                    <div class="col-sm-2"><Link to="/women"><b class="text-dark">Women</b></Link></div>
                    <div class="col-sm-2"> <Link to="/kids"><b class="text-dark">Baby & Kids</b></Link></div>
                    <div class="col-sm-2"><Link to="/sportsBooksandMore"><b class="text-dark">Sports,Books & More</b></Link></div>
                </div>
            </div>
        </>
    )
}
export default Header