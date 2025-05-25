import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OrganisingTeam() {
  const scrollRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const team = [
    {
      name: "Ana María Nchama",
      role: "Lead Organizer",
      bio: "Ana is a machine learning enthusiast focused on community building and AI education in Equatorial Guinea.",
      img: "/team1.jpg",
    },
    {
      name: "David Obiang",
      role: "Technical Lead",
      bio: "David is a software engineer passionate about using AI to solve local challenges.",
      img: "/team2.jpg",
    },
    {
      name: "Lucía Ndong",
      role: "Logistics Coordinator",
      bio: "Lucía ensures smooth operations and handles all event logistics with great detail.",
      img: "/team3.jpg",
    },
    {
      name: "Francisco E.",
      role: "ML Intern",
      img: "/speaker6placeholder.jpg",
      bio: "Lessons from an early-career journey into machine learning.",
    },
    {
      name: "Alicia B.",
      role: "Software Engineer",
      img: "/speaker7placeholder.jpg",
      bio: "Integrating AI features into consumer tech products.",
    },
    {
      name: "Miguel T.",
      role: "Graduate Student",
      img: "/speaker8placeholder.jpg",
      bio: "Advancing African languages in natural language processing.",
    },
    {
      name: "Judith N.",
      role: "Research Assistant",
      img: "/speaker9placeholder.jpg",
      bio: "The role of young minds in shaping Africa’s AI future.",
    },
  ];

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.children[index];
    const offsetLeft = card.offsetLeft;
    const centerOffset =
      offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;

    container.scrollTo({
      left: centerOffset,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  const scrollLeft = () => {
    const newIndex = (currentIndex - 1 + team.length) % team.length;
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = (currentIndex + 1) % team.length;
    scrollToIndex(newIndex);
  };

  return (
    <main className="bg-gradient-to-b from-white to-gray-100 py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Meet the Organizing Team
      </h2>

      <div className="relative max-w-6xl mx-auto group">
        {/* Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-20 opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-20 opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 px-2 pb-8"
        >
          {team.map((member, index) => (
            <div
              key={index}
              className={`snap-center flex-shrink-0 w-[80%] sm:w-[60%] md:w-[40%] transition-transform duration-500 transform ${
                index === currentIndex
                  ? "scale-105 shadow-xl z-10 bg-white"
                  : "scale-95 opacity-70 bg-white"
              } rounded-2xl p-6 text-center border border-gray-200`}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover shadow-md mb-4"
              />
              <h3 className="text-xl font-bold text-green-700">
                {member.name}
              </h3>
              <p className="text-sm text-blue-600 font-semibold mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-700">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {team.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-green-600 scale-125 shadow"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
