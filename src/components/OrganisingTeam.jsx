import Carousel from "./Carousel";

export default function OrganisingTeam() {
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

  return (
    <main className="bg-gradient-to-b from-white to-gray-100 py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Meet the Organizing Team
      </h2>

      <div className="relative max-w-6xl mx-auto group">
        {team.map((member) => (
          <div className="rounded-2xl p-6 text-center border border-gray-200">
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full object-cover shadow-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700">{member.name}</h3>
            <p className="text-sm text-green-500 font-semibold mb-2">
              {member.role}
            </p>
            <p className="text-sm text-gray-700">{member.bio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
