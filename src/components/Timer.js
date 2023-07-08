import React, { useState } from 'react';

function Timer(props) {

  const { value } = props;

  const milliToString = (milli) => {
    const aHours = milli % 360000;
    const aMinutes = aHours % 6000;
    const aSeconds = aMinutes % 100;
    const hoursStr = `${(milli - aHours) / 360000}`
    const minutesStr = `${(aHours - aMinutes) / 6000}`
    const secondsStr = `${(aMinutes - aSeconds) / 100}`

    return `${hoursStr}:${minutesStr}:${secondsStr}`
  }

  return (
    <div>
      <p>{milliToString(value)}</p>
    </div>
  )

}

export default Timer;