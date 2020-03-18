import axios from 'axios'

export const APOD_START = 'APOD_START'
export const APOD_SUCCESS = 'APOD_SUCCESS'
export const APOD_FAILURE = 'APOD_FAILURE'


export function getAPOD(){

    return dispatch => {
        dispatch({type: APOD_START})

        axios.get(`https://api.nasa.gov/planetary/apod?api_key=2dYmiqXNAIT4hSBsaxX3FgUx6ndGHOXd3bNVk0MZ&date=1996-12-18`)
            .then(res => {
                console.log('GET', res)
            })
            .catch(err => {
                dispatch({ type: APOD_FAILURE, payload: err})
            })
    }
}


