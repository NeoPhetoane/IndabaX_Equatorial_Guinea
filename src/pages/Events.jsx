import {
  Cpu,
  BrainCircuit,
  Laptop,
  Rocket,
  Cloud,
  Gamepad2,
} from "lucide-react";
import { Link } from "react-router-dom";
import eventsData from "../data/eventsData";

export default function Events() {
  return (
    <section
      className="min-h-screen bg-white text-gray-800 px-4 py-16"
      style={{ backgroundImage: "url('/bgwhite.png')" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="group relative bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden border border-gray-200"
            >
              <div
                className="absolute left-0 top-0 h-full w-1.5 rounded-r-full"
                style={{ backgroundColor: `var(--tw-${event.barColor})` }}
              ></div>

              <div
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
              ></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {event.icon} {event.title}
                </h3>
                <p className="text-gray-600 mb-3">{event.description}</p>
                <p className="text-sm text-gray-500">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Time:</strong> {event.time}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Location:</strong> {event.location}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Organizer:</strong> {event.organizer}
                </p>
                <div className="mt-4 flex space-x-3">
                  <Link to={`/events/${event.id}/speakers`}>
                    <button className="px-4 py-2 rounded-full bg-true-blue text-white font-medium hover:bg-blue-800 transition-colors duration-300">
                      Speakers
                    </button>
                  </Link>
                  <Link to={`/events/${event.id}/schedule`}>
                    <button className="px-4 py-2 rounded-full bg-true-yellow text-white font-medium hover:bg-green-800 transition-colors duration-300">
                      Schedule
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
