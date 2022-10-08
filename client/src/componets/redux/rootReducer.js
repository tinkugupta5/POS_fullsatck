const intialState = {
    loading:false,
    cartItems:[]
}
export const rootReducer = (state=intialState,action) => {

    switch(action.type) {
        case 'updateCart':
            return{
                ...state,
                //full fill cart item with payload 
                cartItems:[...state.cartItems,action.payload]
            }
        default:return state;
    }
};