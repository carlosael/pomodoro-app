import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="App">
      <PomodoroTimer
        pomodoroTimer={3}
        shortBreakTimer={2}
        longBreakTimer={10}
        cycles={4}
      ></PomodoroTimer>
    </div>
  );
}

export default App;
