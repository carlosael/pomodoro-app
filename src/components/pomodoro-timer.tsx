import React from 'react';
import { useInterval } from '../hooks/use-interval';

interface Props {
  defaultPomodoroTimer: number;
  defaultShortBreakTimer: number;
  defaultLongBreakTimer: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTimer);
  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return <div>{mainTime}</div>;
}
