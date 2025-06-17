import { useParams } from "react-router-dom";
import eventsData from "../data/eventsData";
import { Calendar, Clock, MapPin } from "lucide-react";

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

      {/* Event Details Section */}
      <div
        className="py-20 px-4"
        style={{ backgroundImage: "url('/bgwhite.png')" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-yellow-50 via-white to-blue-50 p-8 rounded-3xl shadow-lg overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-true-blue opacity-10 rounded-full blur-3xl"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {/* Description */}
              <div className="flex flex-col justify-center text-left">
                <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl text-left mb-4 md:mb-10">
                  Event Details
                </h2>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-7xl">
                  {event.description}
                </p>
              </div>

              {/* Meta Details Card */}
              <div className=" mt-8 mb-6 md:mb-10">
                {/* <h3 className="text-xl font-semibold text-true-blue mb-4">
                  
                </h3> */}
                <ul className=" text-gray-700 space-y-8">
                  <li className="flex items-start gap-2">
                    <span className="text-true-blue font-bold">
                      {" "}
                      <Calendar className="inline" /> Date:
                    </span>
                    <span>{event.date}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-true-blue font-bold">
                      <Clock className="inline" /> Time:
                    </span>
                    <span>{event.time}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-true-blue font-bold">
                      <MapPin className="inline" /> Location:
                    </span>
                    <span>{event.location}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Speakers Section */}
          {event.speakers && event.speakers.length > 0 && (
            <section className="py-8 items-center text-left md:text-center ">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl items-center mb-4 md:mb-10">
                Speakers
              </h2>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-7xl items-center text-left md:text-center ">
                Meet our distinguished speakers who will share their insights
                and expertise at this event.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {event.speakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="relative rounded-3xl shadow-lg overflow-hidden transition hover:shadow-2xl group"
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
                    <div className="p-6 text-center">
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
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl items-center text-left md:text-center mb-4 md:mb-10">
                Schedule
              </h2>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-7xl items-center text-left md:text-center ">
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
    </main>
  );
}
