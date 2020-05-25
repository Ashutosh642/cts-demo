import React, { useEffect, useReducer } from 'react'
import reducerWomensApplication from '../Women/reducerWomensApplication'


const useWomensApplication = () => {
    const INITIAL_STATE = {
        Cloth: [],
        FootWears: [],
        Jewellery: [],
        SonataWatch: [],
        
        isAPILoaded: false,
    }
    const [state, dispatch] = useReducer(reducerWomensApplication, INITIAL_STATE);
    const { Cloth,FootWears,Jewellery,SonataWatch} = state;

    useEffect(() => {
        fetch('https://jsonblob.com/api/e401487e-9c4f-11ea-bc24-c962ff017e49')
            .then(res => res.json())
            .then(json => {
                let [{ Footwear,clothing,jewellery,Watches }] = json
                console.log(json)
                setTimeout(() => {
                    dispatch({
                        type: 'API_SUCCESS', payload: {
                            Cloth: [...clothing],
                            FootWears: [...Footwear],
                            Jewellery: [...jewellery],
                            SonataWatch: [...Watches],
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
export default useWomensApplication