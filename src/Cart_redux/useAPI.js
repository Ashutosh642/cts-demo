import React, { useEffect, useReducer } from 'react'
import reducer from './reducer'


const useAPI = () => {

    const INITIAL_STATE = {
        cart: [],
        isAPILoaded: false,
        totalAmount: 0
    }
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const { cart } = state;

    useEffect(() => {
        fetch('https://jsonblob.com/api/a549ce7a-94f4-11ea-9b86-85b58282e959')
            .then(res => res.json())
            .then(json => {
                setTimeout(() => {
                    dispatch({ type: 'API_SUCCESS', payload: { cart: [...json], isAPILoaded: true } })

                }, 2000)

            })

    }, []);

    useEffect(() => {
        dispatch({ type: 'TOTAL_AMOUNT' })
    }, [cart])

    const decrementCounter = (index) => {
        dispatch({ type: 'DECREMENT_COUNTER', payload: { index } })
    }

    const incrementCounter = (index) => {
        dispatch({ type: 'INCREMENT_COUNTER', payload: { index } })
    }

    const deletedata = (index) => {
        dispatch({ type: 'DELETE_DATA', payload: { index } })
    }


    return {
        state,
        decrementCounter,
        incrementCounter,
        deletedata
    }


}

export default useAPI