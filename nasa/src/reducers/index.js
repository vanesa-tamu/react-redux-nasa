import {
    APOD_START,
    APOD_SUCCESS,
    APOD_FAILURE,
} from '../actions/index.js'

const initialState = {
    nasa: null,
    error: '',
    loading: false
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case APOD_START:
            return {
                ...state,
                loading: true
            }
        case APOD_SUCCESS:
            return {
                ...state,
                loading: false,
                nasa: action.payload
            }
        case APOD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                nasa: null
            }
        default: 
            return state
    }
}