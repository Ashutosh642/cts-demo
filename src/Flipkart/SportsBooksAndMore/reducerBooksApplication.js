const reducerBooksApplication = (state, action) => {

    const { type, payload: context } = action
    const { Book,MusicalInstrument,Sport } = state;

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
export default reducerBooksApplication