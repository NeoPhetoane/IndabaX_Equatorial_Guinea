import { useParams } from "react-router-dom";
import eventsData from "../data/eventsData";

export default function EventDetail() {
  const { id } = useParams();
  const event = eventsData.find((e) => String(e.id) === id);

  if (!event) {
    return <div className="p-8 text-center">Event not found.</div>;
  }

  return (
    <main className="font-[Jost] text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white text-center py-32 px-4"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative">
          <h1 className="text-5xl md:text-6xl font-bold"> {event.title}</h1>
        </div>
      </section>

      <section
        className="min-h-screen py-10 px-2"
        style={{ backgroundImage: "url('/bgwhite.png')" }}
      >
        <div className="max-w-7xl mx-auto ">
          <div className="p-4">
            {/* Description & Details Side by Side */}
            <div className="flex flex-col md:flex-row md:gap-8 mb-8">
              {/* Description */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Event Details
                </h2>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl text-left">
                  {event.description}
                </p>
              </div>
              {/* Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-gray-700 text-base p-6">
                <div className="mb-2">
                  <span className="font-semibold text-true-blue">Date:</span>{" "}
                  {event.date}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-true-blue">Time:</span>{" "}
                  {event.time}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-true-blue">
                    Location:
                  </span>{" "}
                  {event.location}
                </div>
                <div>
                  <span className="font-semibold text-true-blue">
                    Organizer:
                  </span>{" "}
                  {event.organizer}
                </div>
              </div>
            </div>

            {/* Speakers Section */}
            {event.speakers && event.speakers.length > 0 && (
              <section className="py-8 items-center">
                <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl items-center text-center">
                  Speakers
                </h2>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-7xl items-center text-center">
                  Meet our distinguished speakers who will share their insights
                  and expertise at this event.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                  {event.speakers.map((speaker, index) => (
                    <div
                      key={index}
                      className="relative bg-white rounded-3xl shadow-lg overflow-hidden transition hover:shadow-2xl group"
                    >
                      {/* Image */}
                      <div className="h-72 w-full overflow-hidden">
                        <img
                          src={speaker.img}
                          alt={speaker.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                        />
                      </div>

                      {/* Info at bottom */}
                      <div className="p-6 text-center bg-white">
                        <h3 className="text-xl font-bold text-gray-900">
                          {speaker.name}
                        </h3>
                        <p className="text-sm text-true-blue font-semibold">
                          {speaker.title}
                        </p>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center px-6 text-center">
                        <h4 className="text-lg font-bold mb-2">
                          {speaker.talkTitle}
                        </h4>
                        <p className="text-sm leading-relaxed">
                          {speaker.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Schedule Section */}
            {event.schedule && event.schedule.length > 0 && (
              <section className="py-8 items-center">
                <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl items-center text-center">
                  Schedule
                </h2>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-7xl items-center text-center">
                  Explore the detailed schedule of activities for this event.
                </p>
                <div className="space-y-4">
                  {event.schedule.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-white via-blue-50 to-gray-100 rounded-xl shadow p-5 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-lg transition"
                    >
                      <div>
                        <div className="text-base font-semibold text-gray-800">
                          {item.activity}
                        </div>
                        <div className="text-sm text-true-blue">
                          {item.speaker}
                        </div>
                      </div>
                      <div className="text-gray-500 mt-2 md:mt-0 font-mono">
                        {item.time}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
