import eventsData from "../data/eventsData";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function UpcomingEvents() {
  return (
    <section
      className="py-20 px-6 bg-yellow"
      style={{ backgroundImage: "url('/bgwhite.png')" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
          Upcoming Events
        </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
          Don't miss out on the exciting events lined up. Mark your calendar and
          join us!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {eventsData.slice(0, 3).map((event) => (
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
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/events"
          className="inline-block mt-10 bg-true-blue text-true-yellow hover:bg-yellow hover:text-true-blue font-semibold py-3 px-8 rounded-lg transition"
        >
          See More Events <ArrowUpRight className="inline ml-2" />
        </Link>
      </div>
    </section>
  );
}
