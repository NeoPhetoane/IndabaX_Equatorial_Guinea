import { useParams } from "react-router-dom";
import eventsData from "../data/eventsData";

export default function EventDetail() {
  const { id } = useParams();
  const event = eventsData.find((e) => String(e.id) === id);

  if (!event) {
    return <div className="p-8 text-center">Event not found.</div>;
  }

  return (
    <section
      className="min-h-screen bg-white px-4 py-16"
      style={{ backgroundImage: "url('/bgwhite.png')" }}
    >
      <div className="mx-auto items-center text-gray-800 text-center">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
        <p className="mb-4 text-gray-700">{event.description}</p>
        <div className="mb-2 text-gray-600">
          <strong>Date:</strong> {event.date}
        </div>
        <div className="mb-2 text-gray-600">
          <strong>Time:</strong> {event.time}
        </div>
        <div className="mb-2 text-gray-600">
          <strong>Location:</strong> {event.location}
        </div>
        <div className="mb-2 text-gray-600">
          <strong>Organizer:</strong> {event.organizer}
        </div>

        {/* Speakers Section */}

        {event.speakers && event.speakers.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Speakers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {event.speakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="relative bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300 group"
                  >
                    <img
                      src={speaker.img}
                      alt={speaker.name}
                      className="w-32 h-32 mx-auto mb-4 object-cover rounded-full shadow"
                    />
                    <h3 className="text-xl font-semibold mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-gray-600">{speaker.title}</p>
                    {/* Hover info */}
                    <div className="absolute inset-0 bg-green-50 bg-opacity-95 rounded-lg flex flex-col items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        {speaker.talkTitle}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {speaker.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {/* Schedule Section */}
        {event.schedule && event.schedule.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Schedule</h2>
              <div className="space-y-6">
                {event.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="text-lg font-semibold text-gray-800">
                        {item.activity}
                      </div>
                      <div className="text-gray-600">{item.speaker}</div>
                    </div>
                    <div className="text-gray-500 mt-2 md:mt-0">
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
