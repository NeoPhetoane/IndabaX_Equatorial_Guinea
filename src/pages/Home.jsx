import { Link } from "react-router-dom";

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
  { time: "12:00 PM", event: "Panel: Future of ML in Central Africa" },
  { time: "02:00 PM", event: "Hands-on Workshop: ML Tools" },
  { time: "04:00 PM", event: "Student Lightning Talks & Networking" },
];
// Place holder testimonials
const testimonials = [
  {
    quote: "IndabaX inspired me to pursue AI!",
    name: "Judith N.",
    role: "Student, UNGE",
  },
  { quote: "The talks were world-class.", name: "Pedro A.", role: "Engineer" },
  {
    quote: "I met amazing mentors and peers.",
    name: "Francisco E.",
    role: "ML Intern",
  },
  {
    quote: "Truly a life-changing experience.",
    name: "Daniela C.",
    role: "Research Assistant",
  },
  {
    quote: "A must-attend for anyone in AI!",
    name: "Miguel T.",
    role: "Graduate Student",
  },
  {
    quote: "The workshops were hands-on and fun.",
    name: "Alicia B.",
    role: "Software Engineer",
  },
  {
    quote: "Incredible community and vibes!",
    name: "Rafael K.",
    role: "Tech Enthusiast",
  },
];

export default function Home() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white text-center py-75 px-4"
        style={{ backgroundImage: "url('/hero2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            IndabaX Equatorial Guinea 202X
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Date to be confirmed · City, Equatorial Guinea
          </p>
          {/*Button component to replace it later */}
          <Link
            to="/registration"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Register Now
          </Link>
        </div>
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
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Schedule Highlights
          </h2>
          <div className="space-y-12">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } md:gap-8`}
              >
                {/* Time Block */}
                <div className="bg-white shadow-md rounded-lg px-6 py-4 w-full md:w-1/2 text-center md:text-right">
                  <p className="text-sm text-gray-500 mb-1">Time</p>
                  <p className="text-lg font-semibold text-green-600">
                    {item.time}
                  </p>
                </div>

                {/* Event Block */}
                <div className="w-full md:w-1/2 mt-4 md:mt-0 text-center md:text-left">
                  <p className="text-sm text-gray-500 mb-1">Event</p>
                  <p className="text-xl font-medium text-gray-800">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            What People Are Saying
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md shadow text-center text-sm"
              >
                <p className="italic text-gray-800 mb-3">“{t.quote}”</p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
