import React from 'react'

import useTVsAppliancesAPI from '../TVsAppliances/useTVsAppliancesAPI'
import TV from '../TVsAppliances/TV'
import Washing from '../TVsAppliances/Washing'
import Air from '../TVsAppliances/Air'
import Fridge from '../TVsAppliances/Fridge'
import Kitchen from '../TVsAppliances/Kitchen'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const TVsAppliances = () => {

    const { state:
        {
            Tvs,
            WashingMachines,
            AirConditioners,
            Refrigirator,
            KitchenAppliance
        }
    } = useTVsAppliancesAPI();

    return (

        <>
            <Router>
                <ul style={{ listStyleType: 'none' }}>
                    <li ><div class="col "><Link to="/television"><h5>Television</h5></Link></div></li>
                    <li ><div class="col "><Link to="/washingMachine"><h5>Washing_Machine</h5></Link></div></li>
                    <li ><div class="col "><Link to="/airConditioners"><h5>Air_Conditioners</h5></Link></div></li>
                    <li ><div class="col "><Link to="/refrigirator"><h5>Refrigirator</h5></Link></div></li>
                    <li ><div class="col "><Link to="/kitchenAppliance"><h5>KitchenAppliance</h5></Link></div></li>
                </ul>
                <Route exact path="/television" component={() => <TV Tvs={Tvs} />}></Route>
                <Route exact path="/washingMachine" component={() => <Washing WashingMachines={WashingMachines} />}></Route>
                <Route exact path="/airConditioners" component={() => <Air AirConditioners={AirConditioners} />}></Route>
                <Route exact path="/refrigirator" component={() => <Fridge Refrigirator={Refrigirator} />}></Route>
                <Route exact path="/kitchenAppliance" component={() => <Kitchen KitchenAppliance={KitchenAppliance} />}></Route>
            </Router>
        </>
    )
}

export default TVsAppliances