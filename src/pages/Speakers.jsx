const speakers = [
  {
    name: "Dr. María Esono",
    title: "AI Researcher",
    img: "/speaker1placeholder.jpg",
    talkTitle: "Harnessing AI for Health in Africa",
    description:
      "Exploring how AI-driven diagnostics can transform healthcare access.",
  },
  {
    name: "Carlos Mba",
    title: "ML Engineer",
    img: "/speaker2placeholder.jpg",
    talkTitle: "Building Scalable ML Systems",
    description: "A deep dive into deploying machine learning at scale.",
  },
  {
    name: "Lucía Nguema",
    title: "Data Scientist",
    img: "/speaker3placeholder.jpg",
    talkTitle: "Data for Development",
    description: "How data science can support sustainable development goals.",
  },
  {
    name: "Pedro Abeso",
    title: "Robotics Expert",
    img: "/speaker4placeholder.jpg",
    talkTitle: "Robotics in Agriculture",
    description:
      "Bringing automation to small-scale farms in Equatorial Guinea.",
  },
  {
    name: "Daniela C.",
    title: "AI Policy Analyst",
    img: "/speaker5placeholder.jpg",
    talkTitle: "Ethics and AI Governance",
    description: "Navigating ethical AI deployment in African contexts.",
  },
  {
    name: "Francisco E.",
    title: "ML Intern",
    img: "/speaker6placeholder.jpg",
    talkTitle: "Getting Started with AI",
    description: "Lessons from an early-career journey into machine learning.",
  },
  {
    name: "Alicia B.",
    title: "Software Engineer",
    img: "/speaker7placeholder.jpg",
    talkTitle: "AI in Everyday Apps",
    description: "Integrating AI features into consumer tech products.",
  },
  {
    name: "Miguel T.",
    title: "Graduate Student",
    img: "/speaker8placeholder.jpg",
    talkTitle: "Research in NLP",
    description: "Advancing African languages in natural language processing.",
  },
  {
    name: "Judith N.",
    title: "Research Assistant",
    img: "/speaker9placeholder.jpg",
    talkTitle: "Youth in AI Research",
    description: "The role of young minds in shaping Africa’s AI future.",
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
