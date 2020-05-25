const reducerElectronicsApplication = (state, action) => {

    const { type, payload: context } = action
    const { Mobiles,Laptops,Cameras,Tablets } = state;

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
export default reducerElectronicsApplication