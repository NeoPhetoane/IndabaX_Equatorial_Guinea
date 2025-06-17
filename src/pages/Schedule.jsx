import { Link } from "react-router-dom";
import eventsData from "../data/eventsData";

export default function Schedule() {
  // const { eventId } = useParams();
  // const event = eventsData.find((e) => String(e.id) === eventId);
  const schedule = eventsData.flatMap((event) => event.schedule || []);
  return (
    <main className="font-[Jost] text-gray-800">
      {/* Hero Banner */}
      <section className="relative bg-[url('/schedule.png')] bg-cover bg-center text-white text-center py-32 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold">
            IndabaX 2025 Event Schedule
          </h1>
          <p className="mt-4 text-xl md:text-2xl">
            3 Days of Learning, Collaboration & Growth
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section
        className="py-16 px-6"
        style={{ backgroundImage: "url('/bgwhite.png')" }}
      >
        <div className="max-w-3xl mx-auto space-y-6">
          {schedule.map((day, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md px-8 py-6 flex items-center"
            >
              {/* Timeline dot */}
              <div className="w-4 h-4 bg-true-blue rounded-full absolute left-0 top-1/2 -translate-y-1/2 -ml-6 border-4 border-white shadow"></div>
              <div>
                <h2 className="text-xl font-semibold text-true-blue mb-1">
                  {day.activity}
                </h2>
                <p className="text-gray-500 text-sm">{day.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
