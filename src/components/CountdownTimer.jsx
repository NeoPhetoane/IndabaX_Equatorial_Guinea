import { useEffect, useState } from "react";

const useAnimatedValue = (value) => {
  const [animate, setAnimate] = useState(false);
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    if (value !== prevValue) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 600);
      setPrevValue(value);
      return () => clearTimeout(timeout);
    }
  }, [value, prevValue]);

  return animate;
};

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const diff = +new Date(targetDate) - +new Date();
    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    return {
      days: totalDays % 365,
      hours: totalHours % 24,
      minutes: totalMinutes % 60,
      seconds: totalSeconds % 60,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  });

  const daysAnimate = useAnimatedValue(timeLeft.days);
  const hoursAnimate = useAnimatedValue(timeLeft.hours);
  const minutesAnimate = useAnimatedValue(timeLeft.minutes);
  const secondsAnimate = useAnimatedValue(timeLeft.seconds);

  const timeBox = (label, value, color, animate) => {
    return (
      <div
        className={`flex flex-col items-center p-4 sm:p-6 rounded-md text-white w-20 sm:w-24 md:w-28 transition-transform duration-500 ${
          animate ? "flip" : ""
        }`}
        style={{ backgroundColor: color }}
      >
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          {String(value).padStart(2, "0")}
        </div>
        <div className="text-xs sm:text-sm md:text-base uppercase text-yellow-400">
          {label}
        </div>
      </div>
    );
  };

  return (
    <div className="flex gap-4 sm:gap-6 justify-center">
      {timeBox("Days", timeLeft.days, "", daysAnimate)}
      {timeBox("Hours", timeLeft.hours, "", hoursAnimate)}
      {timeBox("Mins", timeLeft.minutes, "", minutesAnimate)}
      {timeBox("Sec", timeLeft.seconds, "", secondsAnimate)}
    </div>
  );
};

export default CountdownTimer;
