import { useState, useEffect } from 'react';
import Timer from './components/Timer';
import './App.css';

function App() {

  const [timerProp, setTimerProp] = useState(0);
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

  const setTimerSubmit = (e) => {

    e.preventDefault();

    const secondsMilli = seconds !== '' ? parseInt(seconds) * 100 : 0;
    const minutesMilli = minutes !== '' ? parseInt(minutes) * 60 * 100 : 0;
    const hoursMilli = hours !== '' ? parseInt(hours) * 60 * 60 * 100 : 0;

    setTimerProp(secondsMilli + minutesMilli + hoursMilli);
  }

  return (
    <div className="App">
      <header>
        <h2>Stay On Track</h2>
      </header>


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
        <button type="submit" onClick={setTimerSubmit}>Set!</button>
      </form>

      <Timer value={timerProp} />
    </div>
  );
}

export default App;
