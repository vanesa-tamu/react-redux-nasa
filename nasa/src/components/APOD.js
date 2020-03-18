import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAPOD } from '../actions/index.js' 

const APOD = (props) => {
    useEffect(props.getAPOD, [])
    return(
        <>
        HI
        </>
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps =  { //must return an object!
    getAPOD
}

export default connect(mapStateToProps, mapDispatchToProps)(APOD)