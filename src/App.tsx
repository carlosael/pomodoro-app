import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App() {
  return (
    <div className="App">
      olá mundo
      <PomodoroTimer
        defaultPomodoroTimer={1500}
        defaultShortBreakTimer={300}
        defaultLongBreakTimer={900}
      ></PomodoroTimer>
    </div>
  );
}

export default App;
