import { useEffect, useState } from 'react';

const CalcInfo = () => {
  // const [data, setDate] = useState('');
  // const [time, setTime] = useState('');
  // const InfoHandler = () => {
  //   const newDate = new Date();
  //   const fulldate = newDate.toLocaleDateString();
  //   const fulltime = newDate.toLocaleTimeString();
  //   console.log(fulldate, fulltime);
  //   return {
  //     fulldate,
  //     fulltime,
  //   };
  // };
  // InfoHandler();
  // const Info = InfoHandler();
  // console.log(Info);

  const [dateTime, setDateTime] = useState(new Date());

  // Function to update the date and time every minute
  const updateDateTime = () => {
    setDateTime(new Date());
  };

  // Effect to update the date and time every minute
  useEffect(() => {
    const intervalId = setInterval(updateDateTime, 1000); // 60000 milliseconds = 1 minute

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <div className="container__box---minibox1--info">
        <p className="container__box---minibox1--info-time">
          {dateTime.toLocaleTimeString()}
        </p>
        <p className="container__box---minibox1--info-date">
          {' '}
          {dateTime.toLocaleDateString()}
        </p>
      </div>
    </>
  );
};

export default CalcInfo;
