import { useState } from 'react';

const CalcInfo = () => {
  const [data, setDate] = useState('');
  const [time, setTime] = useState('');
  const InfoHandler = () => {
    const newDate = new Date();
    const fulldate = newDate.toLocaleDateString();
    const fulltime = newDate.toLocaleTimeString();

    console.log(fulldate, fulltime);
    // setDate(fulldate);
    // setTime(fulltime);
    return {
      fulldate,
      fulltime,
    };
  };
  InfoHandler();
  const Info = InfoHandler();
  console.log(Info);
  return (
    <>
      <div className="container__box---minibox1--info">
        <p className="container__box---minibox1--info-time">{Info.fulltime}</p>
        <p className="container__box---minibox1--info-date">{Info.fulldate}</p>
      </div>
    </>
  );
};

export default CalcInfo;
