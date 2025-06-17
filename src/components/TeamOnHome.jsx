import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function OrganisingTeamHome() {
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

  // Create card elements for the carousel
  // const teamCards = team.map((member) => (
  //   <div
  //     key={member.name}
  //     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 rounded-1xl p-6 text-center border border-gray-200 "
  //   >
  //     <img
  //       src={member.img}
  //       alt={member.name}
  //       className="w-24 h-24 mx-auto rounded-2xl object-cover shadow-md mb-4"
  //     />
  //     <h3 className="text-xl font-bold text-gray-700">{member.name}</h3>
  //     <p className="text-sm text-true-blue font-semibold mb-2">{member.role}</p>
  //     <p className="text-sm text-gray-700">{member.bio}</p>
  //   </div>
  // ));

  return (
    <main
      className="max-w-7xl mx-auto py-16 text-left md:text-center px-4 space-y-4 md:space-y-8"
      style={{ backgroundImage: "url('/bgwhite.png')" }}
    >
      <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
        Meet the Organizing Team
      </h2>
      <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
        Our team is dedicated to making IndabaX Equatorial Guinea a success. We
        are passionate about AI and committed to fostering a vibrant community.
      </p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {team.slice(0, 4).map((member) => (
          <div
            key={member.name}
            className="flex flex-col text-left md:text-center justify-between p-6 border border-gray-200 bg-white shadow-md h-full min-h-[340px]"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-60 h-50 mx-auto object-cover rounded-md shadow-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700">{member.name}</h3>
            <p className="text-sm text-true-blue font-semibold mb-2">
              {member.role}
            </p>
            <p className="text-sm text-gray-700">{member.bio}</p>
          </div>
        ))}
      </div>
      <div className="flex text-left md:text-center justify-left md:justify-center">
        <Link
          to="/about"
          className="inline-block mt-10 bg-true-blue text-white hover:bg-yellow hover:text-true-blue font-semibold py-3 px-8 rounded-lg transition"
        >
          See More Team Members <ArrowUpRight className="inline ml-2" />
        </Link>
      </div>
    </main>
  );
}
