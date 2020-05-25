const reducer = (state, action) => {

    const { type, payload: context } = action
    const { cart } = state;

    switch (type) {
        case 'API_SUCCESS': {
            return {
                ...state,
                ...context
            }
        }

        case 'DECREMENT_COUNTER': {
            const { index } = context
            cart[index].quantity--
            return {
                ...state,
                cart: [...cart]
            }
        }

        case 'INCREMENT_COUNTER': {
            const { index } = context
            cart[index].quantity++
            return {
                ...state,
                cart: [...cart]
            }
        }

        case 'DELETE_DATA': {
            const { index } = context
            const shopingCart=cart.filter((item,i)=>i!=index)
            return {
                ...state,
                cart:[...shopingCart]
            }
        }

        case 'TOTAL_AMOUNT': {
            return {
                ...state,
                totalAmount: cart.reduce((acc, item) => acc + parseInt(item.offerPrice) * item.quantity, 0)
            }
        }

        default: {
            return state
        }
    }
}
export default reducer