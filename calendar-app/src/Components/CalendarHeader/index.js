import React from 'react';
import { format } from 'date-fns';
import './style.css'

function CalendarHeader({ date, onPrevMonth, onNextMonth }) {
  return (
    <div className="calendar-header">
      <button onClick={onPrevMonth}>&lt;</button>
      <h2>{format(date, 'MMMM yyyy')}</h2>
      <button onClick={onNextMonth}>&gt;</button>
    </div>
  );
}

export default CalendarHeader;