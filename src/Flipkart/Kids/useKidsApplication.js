import React, { useEffect, useReducer } from 'react'
import reducerKidsApplication from '../Kids/reducerKidsApplication'


const useKidsApplication = () => {
    const INITIAL_STATE = {
        KidsFoot: [],
        Clothings: [],
        Toys: [],
        Brands: [],
       
        
        isAPILoaded: false,
    }
    const [state, dispatch] = useReducer(reducerKidsApplication, INITIAL_STATE);
    const { KidsFoot,Clothings,Toys,Brands} = state;

    useEffect(() => {
        fetch('https://jsonblob.com/api/d48b2cae-9cac-11ea-9a4c-97232072e96d')
            .then(res => res.json())
            .then(json => {
                let [{ Footwear,clothing,toys,FeaturedBrands}] = json
                console.log(json)
                setTimeout(() => {
                    dispatch({
                        type: 'API_SUCCESS', payload: {
                            KidsFoot: [...Footwear],
                            Clothings: [...clothing],
                            Toys: [...toys],
                            Brands: [...FeaturedBrands],
                           
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
export default useKidsApplication