import Day from './Day.jsx'
import React from 'react'

const Calendar = () => {

    //Creating an array which holds the names of the days in the week
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (

        //Rendering a Day element for each day of the week
        <div className = 'calendar'>
            <Day day = { days[0] } />
            <Day day = { days[1] } />
            <Day day = { days[2] } />
            <Day day = { days[3] } />
            <Day day = { days[4] } />
            <Day day = { days[5] } />
            <Day day = { days[6] } />
        </div>
        
    )
}

export default Calendar