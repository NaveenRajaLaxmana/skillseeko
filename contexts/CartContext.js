const { createContext, useContext, useReducer } = require("react");

const CartContext = createContext()

export const useCart = () => {
   const {state,dispatch} = useContext(CartContext)
   return {state,dispatch}
}

const CartProvider = ({children}) => {
    const initialState = {
        cart:[],
        error:null
    }
    const [state,dispatch] = useReducer(cartReducer,initialState)

    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const addtoCart = (item,dispatch) => {
    dispatch({
        type:'ADD',
        payload: item
    })
}

export const removeFromCart = (item,dispatch) => {
    dispatch({
        type:'REMOVE',
        payload: item
    })
}

export const clearCart = (dispatch) => {
    dispatch({
        type:'CLEAR',
    })
}

const cartReducer = (state,action) => {
    switch(action.type)
    {
        case 'ADD':
            return {
                ...state,
                cart:[...state.cart,action.payload]
            }
        case 'REMOVE':
            return {
                ...state,
                cart:cart.filter(arr => {
                    return arr.price==action.payload
                })
            }
        case 'CLEAR':
            return {
                ...state,
                cart:[]
            }
        default:
            return new Error('no type defined')
    }
}

export default CartProvider