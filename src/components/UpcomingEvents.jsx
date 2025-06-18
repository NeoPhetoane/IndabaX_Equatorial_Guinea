import eventsData from "../data/eventsData";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function UpcomingEvents() {
  return (
    <section
      className="py-20 px-4"
      style={{ backgroundImage: "url('/bgwhite.png')" }}
    >
      <div className="max-w-7xl mx-auto text-left md:text-center">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Upcoming Events
        </h2>
        <p className="mt-4 text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
          Don't miss out on the exciting events lined up. Mark your calendar and
          join us!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {eventsData.slice(0, 3).map((event) => (
            <div className="group relative bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden border border-gray-200">
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
                <Link
                  to={`/events/${event.id}`}
                  key={event.id}
                  className="inline-block text-true-blue hover:border-yellow border border-blue px-4 py-2 rounded-full decoration-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/events"
          className="inline-block mt-10 bg-true-blue text-white hover:bg-yellow hover:text-true-blue font-semibold py-3 px-8 rounded-lg transition"
        >
          See More Events <ArrowUpRight className="inline ml-2" />
        </Link>
      </div>
    </section>
  );
}
