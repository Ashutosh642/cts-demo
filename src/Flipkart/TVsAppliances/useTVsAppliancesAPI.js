import React, { useEffect, useReducer } from 'react'

import reducerTVsAppliances from '../TVsAppliances/reducerTVsAppliances'

const useTVsAppliancesAPI = () => {
    const INITIAL_STATE = {
        Tvs: [],
        WashingMachines: [],
        AirConditioners: [],
        Refrigirator: [],
        KitchenAppliance: [],
        isAPILoaded: false,
    }
    const [state, dispatch] = useReducer(reducerTVsAppliances, INITIAL_STATE);
    const { Tvs, WashingMachines, AirConditioners, Refrigirator, KitchenAppliance } = state;

    useEffect(() => {
        fetch('https://jsonblob.com/api/267c6eeb-9ca4-11ea-9a4c-993ab6b6ff3e')
            .then(res => res.json())
            .then(json => {
                let [{ Television, WashingMachine, AC, Refrigirators, KitchenAppliances }] = json
                console.log(json)
                setTimeout(() => {
                    dispatch({
                        type: 'API_SUCCESS', payload: {
                            Tvs: [...Television],
                            WashingMachines: [...WashingMachine],
                            AirConditioners: [...AC],
                            Refrigirator: [...Refrigirators],
                            KitchenAppliance: [...KitchenAppliances], isAPILoaded: true
                        }
                    })

                }, 2000)

            })

    }, []);

    return {
        state
    }
}
export default useTVsAppliancesAPI