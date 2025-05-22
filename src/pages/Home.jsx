import { Link } from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer";
import UpcomingEvents from "../components/UpcomingEvents";
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
        className="relative bg-cover bg-center text-white text-center py-75 px-4 sm:px-8 md:px-20"
        style={{ backgroundImage: "url('/hero10.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            IndabaX Equatorial Guinea
          </h1>
          <p className="text-lg md:text-2xl">
            IndabaX Equatorial Guinea is a local chapter of the Deep Learning
            Indaba movement. We bring together researchers, students, and AI
            enthusiasts to share knowledge and build community. Empowering the
            future of machine learning across Africa, one conversation at a
            time.
          </p>
          <Link
            to="/registration"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              About{" "}
              <span className="text-green-600">IndabaX Equatorial Guinea</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              IndabaX Equatorial Guinea is a local chapter of the Deep Learning
              Indaba, a pan-African movement to strengthen African AI. Our event
              offers a unique space for knowledge sharing, community building,
              and research advancement. It is open to students, professionals,
              and enthusiasts who want to engage with cutting-edge developments
              in AI, collaborate with others, and grow their careers through
              meaningful connections.
              <br></br>
              <br></br>
              We aim to advance our resourceful country using Artificial
              Intelligence and reach unimaginable heights
            </p>
            <br></br>
            {/* Learn More Button */}
            <Link
              to="/about"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded transition duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Image Grid */}
          <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px]">
            <img
              src="/aboutsec1.jpg"
              alt="Top Left"
              className="absolute top-0 left-0 w-36 h-32 md:w-44 md:h-44 object-cover rounded-lg shadow-lg hover:scale-150 transform transition duration-300"
            />
            <img
              src="aboutsec2.jpg"
              alt="Top Right"
              className="absolute top-0 right-0 w-36 h-32 md:w-44 md:h-44 object-cover rounded-lg shadow-lg
             hover:scale-150 transform transition duration-300"
            />
            <img
              src="/aboutsec3.jpg"
              alt="Center"
              className="absolute top-1/2 left-1/2 w-44 h-44 md:w-56 md:h-56 transform -translate-x-1/2 -translate-y-1/2 object-cover rounded-full shadow-xl border-4 border-white
             hover:scale-150 transform transition duration-300"
            />
            <img
              src="/aboutsec4.jpg"
              alt="Bottom Left"
              className="absolute bottom-0 left-4 w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-md
             hover:scale-150 transform transition duration-300"
            />
            <img
              src="/aboutsec5.jpg"
              alt="Bottom Right"
              className="absolute bottom-0 right-4 w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-md
             hover:scale-150 transform transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="bg-green-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
            Why Should *You* Attend?
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
            Whether you're an AI aficionado or just curious about what machine
            learning even *is*,{" "}
            <span className="text-green-700 font-semibold">
              IndabaX Equatorial Guinea
            </span>{" "}
            is the place to be! We’re mixing mind-blowing talks, hands-on
            workshops, and enough brain food to keep your neurons firing long
            after the event.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left mt-8">
            <div className="bg-white rounded-xl shadow p-6 hover:scale-105 transform transition duration-300">
              <h3 className="text-lg font-bold text-green-600 mb-2">Network</h3>
              <p className="text-gray-600 text-sm">
                Connect with brilliant minds from across the continent.
                Students, professionals, researchers — they’ll all be here.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 hover:scale-105 transform transition duration-300">
              <h3 className="text-lg font-bold text-red-500 mb-2">
                Learn New Things
              </h3>
              <p className="text-gray-600 text-sm">
                From AI ethics to computer vision, you'll leave knowing way more
                than you came with. No boring lectures here — just fire content.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 hover:scale-105 transform transition duration-300">
              <h3 className="text-lg font-bold text-blue-600 mb-2">
                Become Inspired
              </h3>
              <p className="text-gray-600 text-sm">
                Hear from thought leaders who are shaping Africa’s AI future.
                Their journeys might just kickstart yours.
              </p>
            </div>
          </div>
          <p className="mt-10 text-lg font-medium text-gray-800">
            So what are you waiting for?{" "}
            <span className="text-red-600 font-bold">Mark your calendar</span>,
            grab your spot, and come join the AI movement!
          </p>
        </div>
      </section>

      {/* Invitation and countdown */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <CountdownTimer />
          <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
            We’re just days away from an unforgettable gathering of innovators,
            researchers, and students passionate about AI in Africa. Mark your
            calendar and get ready to be inspired!
          </p>
        </div>
      </section>

      <UpcomingEvents />

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
      <section className="bg-gradient-to-tr from-green-100 via-white to-gray-50 py-12 px-4">
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

      {/* Call to Action */}
      <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Get Involved?</h2>
        <p className="text-lg mb-6 text-gray-700">
          Whether you're a student, educator, or professional — join us in
          shaping the future of AI in Africa.
        </p>
        <Link
          to="/registration"
          className="bg-red-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Register Now
        </Link>
      </section>
    </main>
  );
}
