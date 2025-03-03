import React from "react";

interface TimerControllerProps {
  handleTimeController: () => void;
  handleTimerStart: () => void;
  handleTimerStop: () => void;
  handleTimerLogger: () => void;
}

function TimerController({
  handleTimeController,
  handleTimerStart,
  handleTimerStop,
  handleTimerLogger,
}: TimerControllerProps) {
  return (
    <div className="space-x-2">
      <button onClick={handleTimerStart}>START</button>
      <button onClick={handleTimerStop}>STOP</button>
    </div>
  );
}

export default TimerController;
