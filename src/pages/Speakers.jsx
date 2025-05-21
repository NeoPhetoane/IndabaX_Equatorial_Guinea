import React from "react";

const speakers = [
  {
    name: "Dr. María Esono",
    title: "AI Researcher",
    img: "/speaker1placeholder.jpg",
  },
  { name: "Carlos Mba", title: "ML Engineer", img: "/speaker2placeholder.jpg" },
  {
    name: "Lucía Nguema",
    title: "Data Scientist",
    img: "/speaker3placeholder.jpg",
  },
  {
    name: "Pedro Abeso",
    title: "Robotics Expert",
    img: "/speaker4placeholder.jpg",
  },
  {
    name: "Daniela C.",
    title: "AI Policy Analyst",
    img: "/speaker5placeholder.jpg",
  },
  { name: "Francisco E.", title: "ML Intern", img: "/speaker6placeholder.jpg" },
  {
    name: "Alicia B.",
    title: "Software Engineer",
    img: "/speaker7placeholder.jpg",
  },
  {
    name: "Miguel T.",
    title: "Graduate Student",
    img: "/speaker8placeholder.jpg",
  },
  {
    name: "Judith N.",
    title: "Research Assistant",
    img: "/speaker9placeholder.jpg",
  },
];

export default function Speakers() {
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
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-32 h-32 mx-auto mb-4 object-cover rounded-full shadow"
                />
                <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
                <p className="text-sm text-gray-600">{speaker.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
