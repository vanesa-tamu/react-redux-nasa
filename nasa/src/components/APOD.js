import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAPOD } from '../actions/index.js' 

const APOD = (props) => {
    const { explanation, title, date, url } = props

    useEffect(() => {
        props.getAPOD()
    }, [])

    return(
        <>
            <h1>{title}</h1>
            <img src={url} alt='Hydrogen' />
            <h3>{date}</h3>
            <h3>{explanation}</h3>
            

        </>
    )
}

const mapStateToProps = (state) => {
    const { nasa } = state


    return {
       title: nasa.title,
       explanation: nasa.explanation,
       date: nasa.date,
       url: nasa.hdurl,
       error: state.error,
       loading: state.loading
    }
}

const mapDispatchToProps =  { //must return an object!
    getAPOD
}

export default connect(mapStateToProps, mapDispatchToProps)(APOD)