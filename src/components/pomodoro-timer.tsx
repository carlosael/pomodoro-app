import React, { useEffect } from 'react';
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
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);
  const [resting, setResting] = React.useState(false);

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');
  }, [working]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
    setMainTime(props.pomodoroTimer);
  };

  const configureRest = (long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);

    if (long) {
      setMainTime(props.longBreakTimer);
    } else {
      setMainTime(props.shortBreakTimer);
    }
  };

  const configurePause = () => {
    // if (timeCounting) {
    // }
    setTimeCounting(!timeCounting);
    setWorking(false);
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime}></Timer>
      <div className="controls">
        <Button text="Work" onClick={() => configureWork()}></Button>
        <Button text="Rest" onClick={() => configureRest(false)}></Button>

        <Button
          className={working && !resting ? 'hidden' : ''}
          text={timeCounting ? 'Pause' : 'Play'}
          onClick={() => configurePause()}
        ></Button>
      </div>
      <div className="details"></div>
    </div>
  );
}
