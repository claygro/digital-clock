import { useState, useEffect } from "react";
function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formateTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let second = time.getSeconds();
    const meridiem = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      second
    )} ${meridiem}`;
  }
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <>
      <div className="colck-container">
        <div className="clock">
          <span>{formateTime()}</span>
        </div>
      </div>
    </>
  );
}
export default DigitalClock;
