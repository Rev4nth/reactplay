import { useEffect, useState } from "react";

function Timer() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sec >= 59) {
        setSec(0);
        setMin((min) => min + 1);
      } else {
        setSec((sec) => sec + 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [sec]);

  return (
    <div>
      <h1 className="text-2xl">Timer</h1>
      {min} : {("0" + sec).substr(-2)}
    </div>
  );
}

export default Timer;
