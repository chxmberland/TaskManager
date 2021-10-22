import React from 'react'
import Form from './Form.jsx'

const Day = (props) => {

    return (
        <div className = 'day'>
            <h1 className = 'day-title'>{ props.day }</h1>
            <Form day = { props.day }/>
        </div>
    )

}

export default Day
