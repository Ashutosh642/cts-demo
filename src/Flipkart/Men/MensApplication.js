import React from 'react'
import useMensApplication from '../Men/useMensApplication'
import Cloth from '../Men/Cloth'
import Footwears from '../Men/Footwears'
import SeasonalWears from '../Men/SeasonalWears'
import Watches from '../Men/Watches'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const MensApplication = () => {

    const { state:
        {
            Clothes,
            FootWear,
            Seasonalwear,
            Watch

        }
    } = useMensApplication();

    return (
        <>
            <Router>
                <ul style={{ listStyleType: 'none' }}>
                    <li ><div class="col "><Link to="/cloth"><h5>Cloths</h5></Link></div></li>
                    <li ><div class="col "><Link to="/footWear"><h5>FootWear</h5></Link></div></li>
                    <li ><div class="col "><Link to="/seasonalwear"><h5>Seasonalwear</h5></Link></div></li>
                    <li ><div class="col "><Link to="/watch"><h5>Watch</h5></Link></div></li>
                </ul>
                <Route exact path="/cloth" component={() => <Cloth Clothes={Clothes} />}></Route>
                <Route exact path="/footWear" component={() => <Footwears FootWear={FootWear} />}></Route>
                <Route exact path="/seasonalwear" component={() => <SeasonalWears Seasonalwear={Seasonalwear} />}></Route>
                <Route exact path="/watch" component={() => <Watches Watch={Watch} />}></Route>
            </Router>
        </>
    )
}
export default MensApplication
