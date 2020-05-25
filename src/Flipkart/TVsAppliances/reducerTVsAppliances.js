const reducerTVsAppliances = (state, action) => {

    const { type, payload: context } = action
    const { Tvs, WashingMachines, AirConditioners, Refrigirator, KitchenAppliance } = state;

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
export default reducerTVsAppliances