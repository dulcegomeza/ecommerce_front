import { types } from '../types/types';

const ProductReducer = (state, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }

        case types.GET_PRODUCTS_TOTAL:
            return {
                ...state,
                total: action.payload
            }

        case types.GET_PRODUCTS_TOTAL_PAGES:
            return {
                ...state,
                total_pages: action.payload
            }

        case types.GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }

        case types.ADD_PRODUCT:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case types.DELETE_PRODUCT:
            return {
                ...state,
                cart: state.cart.filter((product) => product.uid !== action.payload)
            }
        case types.EMPTY_CAR:
            return {
                ...state,
                cart: []
            }

        default:
            return state;
    }

}

export default ProductReducer;