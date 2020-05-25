import React from 'react'
import useElectronicsApplication from '../Electronics/useElectronicsApplication'
import MobileElectronic from '../Electronics/MobileElectronic'
import Laptop from '../Electronics/Laptop'
import Electronic from '../Electronics/Electronic'
import Tablet from '../Electronics/Tablet'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const ElectronicsApplication = () => {

    const { state:
        {
            Mobiles,
            Laptops,
            Cameras,
            Tablets
        }
    } = useElectronicsApplication();

    return (
        <>
        
            <Router>
                <ul style={{ listStyleType: 'none' }}>
                    <li ><div class="col "><Link to="/mobiles"><h5>Mobiles</h5></Link></div></li>
                    <li ><div class="col "><Link to="/laptops"><h5>Laptops</h5></Link></div></li>
                    <li ><div class="col "><Link to="/cameras"><h5>Cameras</h5></Link></div></li>
                    <li ><div class="col "><Link to="/tablets"><h5>Tablets</h5></Link></div></li>
                </ul>
                <Route exact path="/mobiles" component={() => <MobileElectronic Mobiles={Mobiles} />}></Route>
                <Route exact path="/laptops" component={() => <Laptop Laptops={Laptops} />}></Route>
                <Route exact path="/cameras" component={() => <Electronic Cameras={Cameras} />}></Route>
                <Route exact path="/tablets" component={() => <Tablet Tablets={Tablets} />}></Route>
            </Router>
        
        </>
    )
}

export default ElectronicsApplication