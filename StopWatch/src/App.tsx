import { useEffect, useState } from "react";

import "./App.css";
import TimerDisplay from "./components/TimerDisplay";
import TimerController from "./components/TimerController";
import LogTimes from "./components/LogTimes";

function App() {
  const [time, setTime] = useState<string>("00:00:00");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [logging, setLogging] = useState<string>("");

  useEffect(() => {
    const handleTimer = () => {
      //
    };

    void handleTimer()
  })
  const handleTimerConroller = () => {
    
  };

  const handleTimerStart = () => {
    console.log("START");
  };

  const handleTimerStop = () => {
    console.log("STOP");
  };

  const handleTimerLogger = () => {
    //
  };

  return (
    <main className="h-full w-full px-5 pt-20 flex flex-col justify-center items-center gap-2.5">
      <TimerDisplay time={time} />
      <TimerController
        handleTimeController={handleTimerConroller}
        handleTimerStart={handleTimerStart}
        handleTimerStop={handleTimerStop}
        handleTimerLogger={handleTimerLogger}
      />
      <LogTimes logging={logging} />
    </main>
  );
}

export default App;
