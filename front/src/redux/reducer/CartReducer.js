import { ADD_CART, REMOVE_CART } from '../constant/Constant'

const initialState = {
    cartItems:0,
    payload:[],
};

const mainReducer = (state = initialState, action) => {
    // console.log(state);
    switch(action.type){
        case ADD_CART:
            return{
                ...state, 
                cartItems : state.cartItems + 1,               
                payload: [...state.payload,action.payload],               
            }
        case REMOVE_CART:
            return{
                ...state, 
                cartItems : state.cartItems>0 ? state.cartItems - 1 :0,    
                payload: removecart(action.payload),                          
            }
        default:
            return state;
    }
}

const removecart = (payload) =>{
    const index = initialState.payload.indexOf(payload);
    if (index > -1) { 
        initialState.payload.splice(index, 1); 
    }
}

export default mainReducer