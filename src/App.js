import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [timer, setTimer] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');


  const updateForm = (e) => {
    const { target } = e;
    const name = target.name;
    const v = target.value;

    if (!isNaN(v)) {
      switch (name) {
        case 'hours':
          setHours(v);
          break;
        case 'minutes':
          setMinutes(v);
          break;
        case 'seconds':
          setSeconds(v);
          break;
      }
    }
  }

  const setTimerSubmit = () => {
    const secondsMilli = parseInt(seconds) * 100;
    const minutesMilli = parseInt(minutes) * 60 * 100;
    const hoursMilli = parseInt(hours) * 60 * 60 * 100;

    setTimer(secondsMilli + minutesMilli + hoursMilli);
  }

  const milliToString = (milli) => {
    const afterHours = milli % 360000;
    const afterMinutes = afterHours % 6000;
    const afterSeconds = afterMinutes % 100;
    const hoursStr = `${(milli - afterHours) / 360000}`
    const minutesStr = `${(afterHours - afterMinutes) / 6000}`
    const secondsStr = `${(afterMinutes - afterSeconds) / 100}`

    return `${hoursStr}:${minutesStr}:${secondsStr}`
  }

  const cancelTimer = () => {

  }

  return (
    <div className="App">
      <header>
        <h2>Stay On Track</h2>

        <form>
          <input
            name='hours'
            value={hours}
            onChange={updateForm}
            placeholder='hours'
          >
          </input>
          <input
            name='minutes'
            value={minutes}
            onChange={updateForm}
            placeholder='minutes'
          >
          </input>
          <input
            name='seconds'
            value={seconds}
            onChange={updateForm}
            placeholder='seconds'
          >
          </input>
          <button type="button" onClick={setTimerSubmit}>Set!</button>
        </form>

        <p>{milliToString(timer)}</p>

        <button type="button" onClick={cancelTimer}>End timer</button>
      </header>
    </div>
  );
}

export default App;
