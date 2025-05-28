import { Clock } from "lucide-react";

const schedule = [
  {
    time: "09:00 - 09:30",
    title: "Registration & Welcome",
    description: "Sign-in, collect materials, and settle in for the day.",
    highlight: true,
  },
  {
    time: "09:30 - 10:15",
    title: "Opening Keynote",
    description: "Insights from a leading AI researcher in Africa.",
    highlight: true,
  },
  {
    time: "10:30 - 12:00",
    title: "Workshop: Intro to Deep Learning",
    description: "Hands-on coding session for beginners and intermediates.",
    highlight: false,
  },
  {
    time: "12:00 - 13:00",
    title: "Lunch Break",
    description:
      "Network with other participants while enjoying local cuisine.",
    highlight: false,
  },
  {
    time: "13:00 - 14:30",
    title: "Panel Discussion: AI in Africa",
    description: "Industry leaders discuss the future of AI in the region.",
    highlight: true,
  },
  {
    time: "14:45 - 16:00",
    title: "Poster & Demo Session",
    description: "Showcasing student projects and community research.",
    highlight: false,
  },
];

export default function ScheduleHighlights() {
  return (
    <section id="schedule" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Schedule Highlights
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Timetable with key moments marked in green.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 text-left border border-gray-200 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-100 text-gray-600 font-semibold py-3 px-4">
            Time
          </div>
          <div className="bg-gray-100 text-gray-600 font-semibold py-3 px-4 col-span-2">
            Session
          </div>

          {/* Table Rows */}
          {schedule.map((item, index) => (
            <>
              <div
                key={`time-${index}`}
                className={`py-4 px-4 border-t border-gray-200 flex items-center ${
                  item.highlight
                    ? "bg-green-100 text-green-800 font-semibold"
                    : "bg-white"
                }`}
              >
                <Clock className="w-4 h-4 mr-2" />
                {item.time}
              </div>

              <div
                key={`title-${index}`}
                className={`py-4 px-4 border-t border-gray-200 col-span-2 ${
                  item.highlight
                    ? "bg-green-100 text-green-800 font-semibold"
                    : "bg-white"
                }`}
              >
                <div className="text-lg">{item.title}</div>
                <div className="text-sm text-gray-600 mt-1">
                  {item.highlight ? null : item.description}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
