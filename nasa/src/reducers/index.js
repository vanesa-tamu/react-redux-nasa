import {
    APOD_START,
    APOD_SUCCESS,
    APOD_FAILURE,
} from '../actions/index.js'

const initialState = {
    nasa: {}, //note do not put 'null' as initial state
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
                nasa: action.payload //will be an object from GET
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