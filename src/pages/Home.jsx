// Placeholder speakers
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
];
// Place holder schedule
const schedule = [
  { time: "09:00 AM", event: "Opening Ceremony" },
  { time: "10:00 AM", event: "Keynote: AI in Africa" },
  { time: "12:00 PM", event: "Workshop: ML Tools" },
];
// Place holder testimonials
const testimonials = [
  {
    quote: "IndabaX inspired me to pursue AI!",
    name: "Judith N.",
    role: "Student, UNGE",
  },
  { quote: "The talks were world-class.", name: "Pedro A.", role: "Engineer" },
];

export default function Home() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-[url('/hero2.jpg')] bg-cover bg-center text-white text-center py-75 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          IndabaX Equatorial Guinea 202X
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Date to be confirmed · City, Equatorial Guinea
        </p>
        {/*Button component to replace it later */}
        <a
          href="#register"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Register Now
        </a>
      </section>

      {/* Event Summary */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Attend?</h2>
        <p className="text-lg text-gray-700">
          Join researchers, students, and industry professionals for 3 days of
          talks, workshops, and networking on AI and machine learning in Africa.
        </p>
      </section>

      {/* Schedule Highlights */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Schedule Highlights
          </h2>
          <ul className="space-y-4">
            {schedule.map((item, index) => (
              <li key={index} className="flex justify-between border-b pb-2">
                <span className="font-medium">{item.time}</span>
                <span>{item.event}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Speakers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow">
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-70 h-70 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{speaker.name}</h3>
                <p className="text-sm text-gray-600">{speaker.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            What People Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow text-center"
              >
                <p className="italic text-lg text-gray-800 mb-4">“{t.quote}”</p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
