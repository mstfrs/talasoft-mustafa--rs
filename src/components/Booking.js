import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { addDays, getDay, subDays } from "date-fns";

export const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [bookedDays, setBookedDays] = useState([]);
  const [pendingPaymentDays, setPendingPaymentDays] = useState([]);




  const [dateRange, setDateRange] = useState();
  const [motnhCount, setMotnhCount] = useState(3);
  const minDate = new Date(new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate());
  const maxDate = new Date(
    new Date().getFullYear()+1 ,
    new Date().getMonth(),
    new Date().getDate()
  );
 
  

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    setDateRange(dates);
    
  };

  const addBooking = () => {
    setBookedDays([...bookedDays,{
      start: startDate,
      end: endDate,
    }]);
    console.log(bookedDays);
    console.log(pendingPaymentDays);
  };
  const addReserve = () => {
    setPendingPaymentDays([...pendingPaymentDays,{
      start: startDate,
      end: endDate,
    }]);
    
  };

 
  return (
    <>
      <select id="monthcount" onChange={(e) => setMotnhCount(e.target.value)}>
        <option value="" selected disabled>
          --Select Month count to be shown--
        </option>
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="12">12</option>
      </select>
      <br />
      <br />
      <ul className="list">
        <div className="notavaliablecolor">x</div>
        <li className="notavaliable">Not Avaliable</li>
        <div className="bookedcolor">x</div>
        <li className="booked">Booked</li>
        <div className="pendingpaymentcolor">x</div>
        <li className="pendingpayment">Pending Payment</li>
        <li></li>
      </ul>
      
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        minDate={minDate}
        maxDate={maxDate}
        excludeDateIntervals={ bookedDays}  
            
        selectsRange
        // selectsDisabledDaysInRange
        inline
        monthsShown={motnhCount}
        fixedHeight
        todayButton="Today"
        

       
        
        
        
        
      />
      <br />
      <button className="buybutton" onClick={() => addBooking()}> Buy </button>
      <button className="buybutton" onClick={() => addReserve()}> Reserve </button>
    </>
  );
};
