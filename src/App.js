import './App.css';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const AppointmentsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState({
    name: '',
    age: '',
    reason: '',
    timing: ''
  });

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
  };

  const handleAppointmentDetailsChange = (field, value) => {
    setAppointmentDetails(prevDetails => ({
      ...prevDetails,
      [field]: value
    }));
  };

  const handleSaveAppointment = () => {
    // Save appointment logic here
    console.log(appointmentDetails);
    setSelectedDate(null);
    setAppointmentDetails({
      name: '',
      age: '',
      reason: '',
      timing: ''
    });
  };

  return (
    <div className='B1'>
      <h2>Book Your Appointment</h2>
      <Calendar
        localizer={localizer}
        selectable
        onSelectSlot={handleSelectSlot}
        events={[]}
        startAccessor="start"
        endAccessor="end"
      />
      
      {selectedDate && (
        <div className='B2'>
          <h3>Add Appointment</h3>
          <p>Date: {moment(selectedDate).format('YYYY-MM-DD')}</p>
          
          <input className='B3'
            type="text"
            placeholder="Name"
            value={appointmentDetails.name}
            onChange={e => handleAppointmentDetailsChange('name', e.target.value)}
          />
          <input className='B3'
            type="text"
            placeholder="Age"
            value={appointmentDetails.age}
            onChange={e => handleAppointmentDetailsChange('age', e.target.value)}
          />
          <input className='B3'
            type="text"
            placeholder="Reason"
            value={appointmentDetails.reason}
            onChange={e => handleAppointmentDetailsChange('reason', e.target.value)}
          />
          <input className='B3'
            type="time"
            placeholder=" Select Timing"
            value={appointmentDetails.timing}
            onChange={e => handleAppointmentDetailsChange('timing', e.target.value)}
          />
          
          <button onClick={handleSaveAppointment}>Save</button>
        </div>
      )}
    </div>
  );
};

export default AppointmentsCalendar;