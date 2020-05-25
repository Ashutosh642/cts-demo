import React, { useEffect, useReducer } from 'react'
import reducerElectronicsApplication from '../Electronics/reducerElectronicsApplication'


const useElectronicsApplication = () => {
    const INITIAL_STATE = {
        Mobiles:[],
        Laptops:[],
        Cameras:[],
        Tablets:[],
        isAPILoaded: false,
    }
    const [state, dispatch] = useReducer(reducerElectronicsApplication, INITIAL_STATE);
    const { Mobiles,Laptops,Cameras,Tablets } = state;

    useEffect(() => {
        fetch('https://jsonblob.com/api/b97c11d9-9c1a-11ea-bc24-3f35acb28d2d')
            .then(res => res.json())
            .then(json => {
                let [{ mobiles,laptop,camera,tablets }] = json
                console.log(json)
                setTimeout(() => {
                    dispatch({
                        type: 'API_SUCCESS', payload: {
                            Mobiles: [...mobiles],
                            Laptops: [...laptop],
                            Cameras: [...camera],
                            Tablets: [...tablets],
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
export default useElectronicsApplication