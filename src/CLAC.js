import React from 'react';
import Child from './Child.js';

function CALC({ size = "18rem" }) {
    console.log("hi");
    
    return (
        <div className="container">
            <div className="mt-5">
                <div className="card mx-auto my-auto" style={{ width: size }}>
                    <div className="card-header  bg-light">
                        <h4>Calculator</h4>  
                    </div>
                    <Child></Child>
                </div>
            </div>
            
        </div>
        
    )

}
export default CALC;