import { useEffect, useState } from "react";

const eventDate = new Date("2025-08-15T09:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = eventDate - now;

  return diff > 0
    ? {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      }
    : null;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section //className="bg-white py-16 px-6 border-t border-gray-200"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          {timeLeft ? " The Countdown Has Begun:" : "🎉 It's IndabaX Day!"}
        </h2>

        {timeLeft ? (
          <div className="flex justify-center gap-4 sm:gap-8 text-center font-medium text-gray-700">
            {["days", "hours", "minutes", "seconds"].map((unit, i) => (
              <div
                key={i}
                className="bg-gray-100 px-4 py-4 rounded-lg shadow-sm min-w-[70px]"
              >
                <p className="text-2xl md:text-3xl text-green-600 font-bold">
                  {timeLeft[unit]}
                </p>
                <p className="text-sm capitalize">{unit}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-green-700 font-semibold mt-4">
            Join us now and be part of the future of African AI.
          </p>
        )}
      </div>
    </section>
  );
}
