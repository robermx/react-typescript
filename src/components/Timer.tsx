import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
  milisec: number;
};

export const Timer = ({ milisec }: TimerArgs) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<number>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);

    ref.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, milisec);
  }, [milisec]);

  return (
    <div className="mt-3">
      <p>Timer: {seconds}</p>
    </div>
  );
};
