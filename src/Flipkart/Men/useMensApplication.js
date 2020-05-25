import React, { useEffect, useReducer } from 'react'
import reducerMensApplication from '../Men/reducerMensApplication'


const useMensApplication = () => {
    const INITIAL_STATE = {
        Clothes: [],
        FootWear: [],
        Seasonalwear: [],
        Watch: [],
        isAPILoaded: false,
    }
    const [state, dispatch] = useReducer(reducerMensApplication, INITIAL_STATE);
    const { Clothes,FootWear,Seasonalwear,Watch} = state;

    useEffect(() => {
        fetch('https://jsonblob.com/api/9d6a7ef5-9c20-11ea-bc24-4f30b16df4e8')
            .then(res => res.json())
            .then(json => {
                let [{ Footwear,clothing,seasonalWear,watch }] = json
                console.log(json)
                setTimeout(() => {
                    dispatch({
                        type: 'API_SUCCESS', payload: {
                            Clothes: [...clothing],
                            FootWear: [...Footwear],
                            Seasonalwear: [...seasonalWear],
                            Watch: [...watch],
                             isAPILoaded: true
                        }
                    })

                }, 2000)

            })

    }, []);

    return {
        state
    }
}
export default useMensApplication