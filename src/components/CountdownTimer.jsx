import React, { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  });

  const circleSize = 100;
  const radius = circleSize / 2 - 5;
  const circumference = 2 * Math.PI * radius;

  const renderCircle = (value, max, label) => {
    const progress = (value / max) * circumference;

    return (
      <div className="flex flex-col items-center">
        <svg width={circleSize} height={circleSize}>
          <circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            stroke="#eee"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            fill="none"
            strokeLinecap="round"
            transform={`rotate(-90 ${circleSize / 2} ${circleSize / 2})`}
          />
          <defs>
            <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="green" />
              <stop offset="100%" stopColor="lime" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-mt-20 text-gray-900 font-bold text-xl">
          {String(value).padStart(2, "0")}
        </div>
        <div className="text-xs text-gray-500 mt-2 uppercase">{label}</div>
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        The CountDown Has Begun
      </h2>
      <div className="flex justify-center items-center gap-6 p-8 rounded-xl">
        {renderCircle(timeLeft.days || 0, 30, "Days")}
        {renderCircle(timeLeft.hours || 0, 24, "Hours")}
        {renderCircle(timeLeft.minutes || 0, 60, "Minutes")}
        {renderCircle(timeLeft.seconds || 0, 60, "Seconds")}
      </div>
    </div>
  );
};

export default CountdownTimer;
