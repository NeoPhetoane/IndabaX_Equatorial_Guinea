import { Link } from "react-router-dom";

const eventsData = [
  {
    id: 1,
    icon: "📅",
    title: "Tech Conference 2025",
    description:
      "Join the biggest tech conference with keynotes, panels, and workshops.",
    date: "June 15, 2025",
    barColor: "green-500",
    image: "/hero2.jpg",
  },
  {
    id: 2,
    icon: "🤖",
    title: "AI & ML Summit",
    description:
      "Explore the latest in AI and Machine Learning innovations and research.",
    date: "July 20, 2025",
    barColor: "green-500",
    image: "/aichip.jpg",
  },
  {
    id: 3,
    icon: "💻",
    title: "Web Dev Workshop",
    description: "Hands-on workshop to level up your web development skills.",
    date: "August 10, 2025",
    barColor: "green-500",
    image: "/hero11.jpg",
  },
  {
    id: 4,
    icon: "🚀",
    title: "Startup Pitch Night",
    description: "Pitch your ideas to investors and get valuable feedback.",
    date: "September 5, 2025",
    barColor: "green-500",
    image: "/hero3.jpg",
  },
  {
    id: 5,
    icon: "☁️",
    title: "Cloud Expo",
    description: "Dive into cloud computing technologies and trends.",
    date: "October 12, 2025",
    barColor: "green-500",
    image: "/hero10.jpg",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
          Upcoming Events
        </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
          Don't miss out on the exciting events lined up. Mark your calendar and
          join us!
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="relative bg-cover bg-center border border-gray-200 rounded-xl shadow-md px-6 py-8 hover:shadow-lg transition duration-300 text-white"
              style={{
                backgroundImage: `url(${event.image})`,
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0,0,0,0.6)",
              }}
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 ${event.barColor} rounded-t-xl`}
              />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-sm">{event.description}</p>
                <Link to="/events">
                  <button className="mt-6 bg-white text-black text-sm font-semibold px-4 py-2 rounded-md hover:bg-green-600">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
