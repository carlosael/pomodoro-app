import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="App">
      <PomodoroTimer
        pomodoroTimer={1500}
        shortBreakTimer={600}
        longBreakTimer={900}
        cycles={4}
      ></PomodoroTimer>
    </div>
  );
}

export default App;
