import { Clock } from "lucide-react";

const schedule = [
  {
    time: "09:00 - 09:45",
    title: "Opening Keynote: The Future of AGI – Beyond Hype",
    description:
      "An visionary address on the roadmap and real-world implications of Artificial General Intelligence.",
    highlight: true,
  },
  {
    time: "10:15 - 11:00",
    title: "Revolutionizing Industries with Generative AI",
    description:
      "Explore how large language models and generative AI are transforming creative, business, and scientific fields.",
    highlight: false,
  },
  {
    time: "11:30 - 12:30",
    title: "Hands-on Workshop: Building Your First AI Model in 60 Mins",
    description:
      "A practical session for beginners, guided through creating a simple machine learning model.",
    highlight: true,
  },
  {
    time: "12:30 - 13:45",
    title: "Networking Lunch & AI Startup Showcase",
    description:
      "Enjoy a catered lunch while exploring innovative solutions from emerging AI startups.",
    highlight: false,
  },
  {
    time: "14:15 - 15:00",
    title: "Panel Discussion: Ethical AI – Navigating Bias & Responsibility",
    description:
      "Leading experts debate the critical challenges and best practices for developing ethical and fair AI systems.",
    highlight: true,
  },
  {
    time: "15:30 - 16:30",
    title: "Interactive Demo: Robotics & Autonomous Systems Live",
    description:
      "Witness live demonstrations of cutting-edge robotics and autonomous AI systems in action.",
    highlight: false,
  },
  {
    time: "16:45 - 17:30",
    title: "Closing Remarks & AI Innovations Pitch Competition",
    description:
      "Concluding thoughts, followed by a thrilling pitch competition showcasing the next big AI ideas.",
    highlight: true,
  },
];

export default function ScheduleHighlights() {
  return (
    <section id="schedule" className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Schedule Highlights
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Explore key moments in our event schedule.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 grid-rows-3 w-full max-w-5xl mx-auto border border-gray-200 rounded-xl overflow-hidden">
          {Array.from({ length: 15 }).map((_, idx) => {
            // Only fill every other cell with schedule data
            const scheduleIdx = Math.floor(idx / 2);
            const showItem = idx % 2 === 0 && schedule[scheduleIdx];
            const isHighlighted = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center aspect-square border-b border-r border-gray-200
                  ${isHighlighted && showItem ? "bg-green-50" : "bg-white"}
                  ${idx % 5 === 3 ? "border-r-0" : ""}
                  ${idx >= 10 ? "border-b-0" : ""}
                  transition`}
              >
                {showItem ? (
                  <div className="text-center px-2">
                    <div className="text-base font-semibold text-gray-800">
                      {schedule[scheduleIdx].title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {schedule[scheduleIdx].time}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
