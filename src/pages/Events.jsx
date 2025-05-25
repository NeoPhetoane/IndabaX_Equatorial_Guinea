import {
  Cpu,
  BrainCircuit,
  Laptop,
  Rocket,
  Cloud,
  Gamepad2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Events() {
  const eventsData = [
    {
      id: 1,
      icon: <Cpu className="text-green-600" />,
      title: "Tech Conference 2025",
      description:
        "Join the biggest annual gathering of developers, designers, and tech leaders. Keynotes from industry pioneers, hands-on coding sessions, and future-shaping panels await.",
      date: "June 15, 2025",
      time: "09:00 AM - 05:00 PM",
      location: "Johannesburg Convention Centre",
      organizer: "TechSA Foundation",
      barColor: "bg-green-500",
      image: "/hero2.jpg",
    },
    {
      id: 2,
      icon: <BrainCircuit className="text-green-600" />,
      title: "AI & ML Summit",
      description:
        "Dive deep into neural networks, generative models, and ethical AI. Engage with experts and researchers building the next generation of intelligent systems.",
      date: "July 20, 2025",
      time: "10:00 AM - 04:00 PM",
      location: "Cape Town Innovation Hub",
      organizer: "Africa AI Collective",
      barColor: "bg-blue-500",
      image: "/aichip.jpg",
    },
    {
      id: 3,
      icon: <Laptop className="text-green-600" />,
      title: "Web Dev Workshop",
      description:
        "A one-day hands-on workshop covering React, performance optimization, and modern web design trends. Ideal for beginners and mid-level developers.",
      date: "August 10, 2025",
      time: "08:30 AM - 03:30 PM",
      location: "Durban Tech Campus",
      organizer: "Code4Africa",
      barColor: "bg-purple-500",
      image: "/hero11.jpg",
    },
    {
      id: 4,
      icon: <Rocket className="text-green-600" />,
      title: "Startup Pitch Night",
      description:
        "Pitch your groundbreaking idea to investors, accelerators, and tech influencers. Network with other founders and receive expert feedback.",
      date: "September 5, 2025",
      time: "06:00 PM - 09:00 PM",
      location: "Pretoria Launch Lab",
      organizer: "StartupSA",
      barColor: "bg-orange-500",
      image: "/hero3.jpg",
    },
    {
      id: 5,
      icon: <Cloud className="text-green-600" />,
      title: "Cloud Expo",
      description:
        "A full-day expo on cloud infrastructure, DevOps, and SaaS platforms. Workshops led by AWS, Azure, and Google Cloud architects.",
      date: "October 12, 2025",
      time: "09:00 AM - 05:00 PM",
      location: "Sandton Cloud Hall",
      organizer: "Cloud Builders Group",
      barColor: "bg-cyan-500",
      image: "/hero10.jpg",
    },
    {
      id: 6,
      icon: <Gamepad2 className="text-green-600" />,
      title: "GameDev Meetup",
      description:
        "Meet other indie developers, showcase your games, and attend workshops on Unity, Unreal Engine, and monetization strategies.",
      date: "November 2, 2025",
      time: "10:00 AM - 04:00 PM",
      location: "GeekZone, Port Elizabeth",
      organizer: "Game Africa",
      barColor: "bg-red-400",
      image: "/gamingai.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-gray-800 px-4 py-16">
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
                <Link to="/registration">
                  <button className="mt-4 inline-block px-5 py-2 rounded-full bg-green-700 text-white font-medium hover:bg-red-500 transition-colors duration-300">
                    Register
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
