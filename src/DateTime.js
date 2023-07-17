import './datetime.css';
import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const DateTime = () => {
  const [time, setTime] = useState(moment().format('HH:mm:ss'));
  const [date, setDate] = useState(moment().format('DD-MM-YYYY'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format('HH:mm:ss'));
      setDate(moment().format('DD-MM-YYYY'));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getTimeByZone = (zone = 'Asia/Kolkata') => {
    return moment().tz(zone).format('HH:mm:ss');
  };

  const getDateByZone = (zone = 'Asia/Kolkata') => {
    return moment().tz(zone).format('DD-MMMM-YYYY');
  };

  return (
    <div>
      <div className='datetime'>
      <p className="date">{getDateByZone()}</p>
        <p className="time">{getTimeByZone()}</p>
        
      </div>
    </div>
  );
};

export default DateTime;
