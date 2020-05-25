import React, { useEffect, useReducer } from 'react'
import reducerBooksApplication from '../SportsBooksAndMore/reducerBooksApplication'


const useBooksApplication = () => {
    const INITIAL_STATE = {
        Book: [],
        MusicalInstrument: [],
        Sport: [],
        isAPILoaded: false,
    }
    const [state, dispatch] = useReducer(reducerBooksApplication, INITIAL_STATE);
    const { Book,MusicalInstrument,Sport} = state;

    useEffect(() => {
        fetch('https://jsonblob.com/api/25a72042-9cb3-11ea-9a4c-9f104196abb3')
            .then(res => res.json())
            .then(json => {
                let [{ books,musicalInstruments,sports}] = json
                console.log(json)
                setTimeout(() => {
                    dispatch({
                        type: 'API_SUCCESS', payload: {
                            Book: [...books],
                            MusicalInstrument: [...musicalInstruments],
                            Sport: [...sports],
                           
                           
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
export default useBooksApplication