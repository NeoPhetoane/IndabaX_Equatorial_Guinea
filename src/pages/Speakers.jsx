// import { useParams } from "react-router-dom";
import eventsData from "../data/eventsData";

export default function Speakers() {
  // Flatten all speakers from all events into a single array
  const speakers = eventsData.flatMap((event) => event.speakers || []);
  // const { eventId } = useParams();
  // const event = eventsData.find((e) => String(e.id) === eventId);

  return (
    <main className="font-[Jost] text-gray-800">
      {/* Hero banner for Speaker page */}
      <section className="relative bg-[url('/speakersbanner.jpg')] bg-cover bg-[50%_20%] text-white text-center py-32 px-4">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative">
          <h1 className="text-5xl md:text-6xl font-bold">2025 Speakers</h1>
          <p className="mt-4 text-xl md:text-2xl">
            Meet the inspiring minds shaping the future of AI in Africa
          </p>
        </div>
      </section>

      {/* Speaker Cards */}
      <section className="py-8 px-4 items-center text-left md:text-center ">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4 md:mb-8">
          Speakers
        </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed items-center text-left md:text-center ">
          Meet our distinguished speakers who will share their insights and
          expertise at this event.
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {speakers.map((speaker, index) => (
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
                <h4 className="text-lg font-bold mb-2">{speaker.talkTitle}</h4>
                <p className="text-sm leading-relaxed">{speaker.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
