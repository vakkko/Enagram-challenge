import React, { useEffect, useState, type SetStateAction } from "react";
import {
  Progress,
  ProgressBox,
  ProgressText,
  ProgressTrack,
} from "./progressBar.styled";

export default function ProgressBar({
  setShowProgressBar,
  setResetLetters,
}: {
  setShowProgressBar: React.Dispatch<SetStateAction<boolean>>;
  setResetLetters: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 100;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setValue(currentStep);

      if (currentStep >= 100) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (value === 100) {
      setShowProgressBar(false);
      setResetLetters(true);
    }
  });

  console.log(value);
  return (
    <>
      {value !== 100 && (
        <ProgressBox>
          <div>
            <img src="./images/circle-dot.png" alt="dot in circle" />
          </div>
          <div>
            <ProgressText>
              Converting... Thank you For your Patience
            </ProgressText>
            <ProgressTrack>
              <span>{value}%</span>
              <Progress max={100} value={value} />
            </ProgressTrack>
          </div>
        </ProgressBox>
      )}
    </>
  );
}
