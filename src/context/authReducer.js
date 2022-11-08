import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:

            return {
                ...state,
                logged: true,
                name: action.payload.name,
                lastName: action.payload.lastName,
                email: action.payload.email,
                uid: action.payload.uid
            }

        case types.logout:

            return {
                logged: false
            }

        default:
            return state;
    }

}