import React from 'react'

const Login = () => {

    return (
        <>
            <div class="container">
                <div class="card " style={{ width: '800px' }}>
                    <div class="card-body">
                        <div class="row ">
                            <div class="col-3 bg-primary text-white ">
                                <h3 class="mt-3">Login</h3>
                                <p>Get access to your Orders, Wishlist and Recommendations</p>
                                <img width="165" height="155" class="img-responsive mt-3" src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" />
                            </div>

                            <div class="col-8">
                                <form>
                                    <div class=" form-group">
                                        <label for="email">Enter Email/Mobile Number</label>
                                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Password:</label>
                                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                                    </div>
                                    <div class="form-group form-check">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                        </label>
                                    </div>
                                    <button type="submit" class=" btn" style={{ width: '200px', backgroundColor: '#fb641b' }}>Login</button>
                                    <p class="text-muted mt-2" style={{ marginLeft: '80px' }}>OR</p>
                                    <button type="submit" class=" btn shadow bg-white" style={{ width: '200px' }}> Request OTP</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login
