import React from 'react'
import useKidsApplication from '../Kids/useKidsApplication'
import KidsCloth from '../Kids/KidsCloth'
import FootKid from '../Kids/FootKid'
import Toy from '../Kids/Toy'
import Brand from '../Kids/Brand'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const KidsApplication = () => {

    const { state:
        {
            Clothings,
            Toys,
            Brands,
            KidsFoot

        }
    } = useKidsApplication();

    return (
        <>
            <Router>
                <ul style={{ listStyleType: 'none' }}>
                    <li ><div class="col "><Link to="/cloth"><h5>Cloths</h5></Link></div></li>
                    <li ><div class="col "><Link to="/toys"><h5>Toys</h5></Link></div></li>
                    <li ><div class="col "><Link to="/brand"><h5>Brand</h5></Link></div></li>
                    <li ><div class="col "><Link to="/footWear"><h5>FootWears</h5></Link></div></li>
                </ul>
                <Route exact path="/cloth" component={() => <KidsCloth Clothings={Clothings} />}></Route>
                <Route exact path="/toys" component={() => <Toy Toys={Toys} />}></Route>
                <Route exact path="/brand" component={() => <Brand Brands={Brands} />}></Route>
                <Route exact path="/footWear" component={() => <FootKid KidsFoot={KidsFoot} />}></Route>
            </Router>

        </>
    )
}

export default KidsApplication