import React from 'react';
import { useInterval } from '../hooks/use-interval';

import { Button } from './button';
import { Timer } from './timer';

interface Props {
  pomodoroTimer: number;
  shortBreakTimer: number;
  longBreakTimer: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTimer);
  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime}></Timer>
      <div className="controls">
        <Button text="teste" onClick={() => console.log('teste')}></Button>
        <Button text="teste" onClick={() => console.log('teste')}></Button>
        <Button text="teste" onClick={() => console.log('teste')}></Button>
      </div>
    </div>
  );
}
