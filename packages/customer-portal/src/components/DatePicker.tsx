import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendar } from 'react-icons/fa';

const DatepickerWithIcon = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="relative flex items-center">
      <FaCalendar className="absolute left-3 text-gray-700 z-50" size={35} />
      {/* <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        className="py-3 px-12 pl-16 block w-1/2 border-gray-200 border-2 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 text-gray-600 font-bold"
      /> */}
    </div>
  );
};

export default DatepickerWithIcon;
