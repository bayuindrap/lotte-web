const INITIAL_STATE = {
    productList : []
}

export const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCT" :
            console.log("reducer prod", action.payload)
            return {
                ...state,
                productList: action.payload
            }
            default :
            return state
    }       
}