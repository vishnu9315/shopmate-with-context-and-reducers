
export const cartReducers = (state, action) => {
    const {type, payload} = action;
    //We are handling multiple cases using dispatch instead of single case like setState
    //type means basically what we are going to perform
    switch(type){
        
        case "ADD_TO_CART":
            return {...state, cartList: payload.products}
        
        case "REMOVE_FROM_CART":
            return {...state, cartList: payload.products}
        
        case "UPDATE_TOTAL":
            return {...state, total: payload.total}
        default:
            throw new Error("No case found in CartReducer")
    }
}