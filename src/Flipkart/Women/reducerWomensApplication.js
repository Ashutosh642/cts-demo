const reducerWomensApplication = (state, action) => {

    const { type, payload: context } = action
    const { Cloth,FootWears,Jewellery,SonataWatch } = state;

    switch (type) {
        case 'API_SUCCESS': {
            return {
                ...state,
                ...context
            }
        }
        default: {
            return state
        }
    }
}
export default reducerWomensApplication