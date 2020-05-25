const reducerMensApplication = (state, action) => {

    const { type, payload: context } = action
    const { Clothes,FootWear,Seasonalwear,Watch } = state;

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
export default reducerMensApplication