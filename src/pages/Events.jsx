import {
  Cpu,
  BrainCircuit,
  Laptop,
  Rocket,
  Cloud,
  Gamepad2,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import eventsData from "../data/eventsData";

export default function Events() {
  return (
    <main className="font-[Jost] text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[url('/eventsbanner.jpg')] bg-cover bg-center text-white text-center py-32 px-4">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative">
          <h1 className="text-5xl md:text-6xl font-bold">Events</h1>
          <p className="mt-4 text-xl md:text-2xl">
            See out past and future Events
          </p>
        </div>
      </section>
      <section
        className="min-h-screen bg-white text-gray-800 px-4 py-16"
        style={{ backgroundImage: "url('/bgwhite.png')" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl text-center mb-10">
            Events
          </h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {eventsData.map((event) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
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
                  {/* <p className="text-sm text-gray-500">
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
                  </p> */}
                  <div className="mt-4 flex space-x-3">
                    <Link
                      key={event.id}
                      to={`/events/${event.id}`}
                      className="inline-block bg-true-blue text-white hover:bg-yellow hover:text-true-blue font-semibold py-3 px-8 rounded-lg transition"
                    >
                      See More <ArrowUpRight className="inline ml-2" />
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
