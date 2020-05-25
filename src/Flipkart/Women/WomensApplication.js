import React from 'react'
import useWomensApplication from '../Women/useWomensApplication'
import ClothDesign from '../Women/ClothDesign'
import Foot from '../Women/Foot'
import Jewel from '../Women/Jewel'
import TitanWatch from '../Women/TitanWatch'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const WomensApplication = () => {

    const { state:
        {
            Cloth,
            FootWears,
            Jewellery,
            SonataWatch

        }
    } = useWomensApplication();

    return (
        <>
            <Router>
                <ul style={{ listStyleType: 'none' }}>
                    <li ><div class="col "><Link to="/cloth"><h5>Cloths</h5></Link></div></li>
                    <li ><div class="col "><Link to="/footWear"><h5>FootWear</h5></Link></div></li>
                    <li ><div class="col "><Link to="/jewellery"><h5>Jewellery</h5></Link></div></li>
                    <li ><div class="col "><Link to="/watch"><h5>Watch</h5></Link></div></li>
                </ul>
                <Route exact path="/cloth" component={() => <ClothDesign Cloth={Cloth} />}></Route>
                <Route exact path="/footWear" component={() => <Foot FootWears={FootWears} />}></Route>
                <Route exact path="/jewellery" component={() => <Jewel Jewellery={Jewellery} />}></Route>
                <Route exact path="/watch" component={() => <TitanWatch SonataWatch={SonataWatch} />}></Route>
            </Router>
        </>
    )
}

export default WomensApplication