import React, { useState, useEffect } from 'react';

function Timer(props) {

  const value = Math.floor(props.value / 100);


  const [timerStr, setTimerStr] = useState('00:00:00');
  const [seconds, setSeconds] = useState(value);

  const numFormat = (val) => {
    return val < 10 ? `0${val}` : `${val}`
  }

  const secondsToString = (seconds) => {
    const aHours = seconds % 3600;
    const aMinutes = aHours % 60;
    const timerArr = [(seconds - aHours) / 3600, (aHours - aMinutes) / 60, aMinutes % 60];

    return `${numFormat(timerArr[0])}:${numFormat(timerArr[1])}:${numFormat(timerArr[2])}`;
  }

  console.log(seconds);

  useEffect(() => {
    setTimerStr(secondsToString(seconds))
  }, [secondsToString, seconds])

  useEffect(() => {
    setSeconds(value)
  }, [seconds])

  useEffect(() => {
    const interval = setInterval(() => {
      if (document.hasFocus()) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsToString, seconds])

  return (
    <div>
      <p>{timerStr}</p>
      <button>Give up</button>
    </div>
  )

}

export default Timer;