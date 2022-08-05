export function secondsToHours(seconds: number): string {
  return `${Math.floor(seconds / 3600)}:${
    Math.floor(seconds / 60) % 60 < 10 ? '0' : ''
  }${Math.floor(seconds / 60) % 60}:${seconds % 60 < 10 ? '0' : ''}${
    seconds % 60
  }`;
}
