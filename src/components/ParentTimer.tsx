import { Timer } from './Timer';
import { useState } from 'react';

export const ParentTimer = () => {
  const [milisec, setMilisec] = useState(1000);
  return (
    <div>
      <h3>Timer</h3>
      <p>miliseconds {milisec} </p>

      <button
        onClick={() => setMilisec(1000)}
        className="btn btn-outline-success"
      >
        1000
      </button>
      <button
        onClick={() => setMilisec(2000)}
        className="btn btn-outline-success"
      >
        2000
      </button>
      <Timer milisec={milisec} />
    </div>
  );
};
