const reducerKidsApplication = (state, action) => {

    const { type, payload: context } = action
    const { Clothings,Toys,Brands,KidsFoot } = state;

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
export default reducerKidsApplication