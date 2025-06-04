import { useParams } from "react-router-dom";
import eventsData from "../data/eventsData";

export default function Speakers() {
  // Flatten all speakers from all events into a single array
  // const speakers = eventsData.flatMap((event) => event.speakers || []);
  const { eventId } = useParams();
  const event = eventsData.find((e) => String(e.id) === eventId);

  return (
    <main className="font-sans text-gray-800">
      {/* Hero banner for Speaker page */}
      <section className="bg-[url('/hero7.jpg')] bg-cover bg-center text-white text-center py-32 px-4">
        <h1 className="text-5xl md:text-6xl font-bold">Speakers</h1>
        <p className="mt-4 text-xl md:text-2xl">
          Meet the inspiring minds shaping the future of AI in Africa
        </p>
      </section>
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
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
                <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
                <p className="text-sm text-gray-600">{speaker.title}</p>

                {/* Hover info */}
                <div className="absolute inset-0 bg-green-50 bg-opacity-95 rounded-lg flex flex-col items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {speaker.talkTitle}
                  </h4>
                  <p className="text-sm text-gray-600">{speaker.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
