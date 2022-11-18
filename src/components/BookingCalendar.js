import React, { useState } from 'react'
import { Calendar, YearView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const BookingCalendar = () => {
    const [date, setDate] = useState(new Date());
    const minDate= new Date()
    const maxDate = new Date(new Date().getFullYear()+1, new Date().getMonth(),new Date().getDate());
     const booked_date=[new Date()]
    
     return (
     <div className='app'>
       <h1 className='header'>React Calendar</h1>
       <div>
        <Calendar  showNeighboringMonth={false} onChange={setDate} value={date} showNavigation={true} view="month" maxDate={maxDate} minDate={minDate} selectRange={true} />
       </div>
    
       {date.length > 0 ? (
       <p>
         <span>Start:</span>
         {date[0].toDateString()}
         &nbsp;
         &nbsp;
         <span>End:</span>{date[1].toDateString()}
       </p>
              ) : (
       <p>
          <span>Default selected date:</span>{date.toDateString()}
       </p> 
              )
       }
       
    
     </div>
      )
}

export default BookingCalendar