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
    image: "/speaker9placeholder.jpg",
  },
  {
    quote: "The talks were world-class.",
    name: "Pedro A.",
    role: "Engineer",
    image: "/speaker2placeholder.jpg",
  },
  {
    quote: "I met amazing mentors and peers.",
    name: "Francisco E.",
    role: "ML Intern",
    image: "/speaker4placeholder.jpg",
  },
  {
    quote: "Truly a life-changing experience.",
    name: "Daniela C.",
    role: "Research Assistant",
    image: "/speaker6placeholder.jpg",
  },
  {
    quote: "A must-attend for anyone in AI!",
    name: "Miguel T.",
    role: "Graduate Student",
    image: "/speaker7placeholder.jpg",
  },
  {
    quote: "The workshops were hands-on and fun.",
    name: "Alicia B.",
    role: "Software Engineer",
    image: "/speaker5placeholder.jpg",
  },
  {
    quote: "Incredible community and vibes!",
    name: "Rafael K.",
    role: "Tech Enthusiast",
    image: "/speaker8placeholder.jpg",
  },
];

export default function Home() {
  return (
    <main className="font-sans text-gray-800 ">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white text-center py-75 px-4 sm:px-8 md:px-20"
        style={{ backgroundImage: "url('/hero1.jpg')" }}
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
          <p className="text-lg md:text-2xl">Do not miss the next event: </p>
          <Link
            to="/registration"
            className="bg-red-600 hover:bg-green-700 text-white font-bold py-6 px-6 rounded-md transition"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 mt-8 md:mt-20">
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
              <br />
              <br />
              We aim to advance our resourceful country using Artificial
              Intelligence and reach unimaginable heights
            </p>
            <br />
            {/* Learn More Button */}
            <Link
              to="/about"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded transition duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Image Grid */}
          <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[500px] md:self-start">
            <img
              src="/aboutsec1.jpg"
              alt="Top Left"
              className="absolute top-0 left-0 w-32 h-28 md:w-40 md:h-36 object-cover rounded-lg shadow-lg hover:scale-125 transform transition duration-300"
            />
            <img
              src="/aboutsec2.jpg"
              alt="Top Right"
              className="absolute top-0 right-0 w-32 h-28 md:w-40 md:h-36 object-cover rounded-lg shadow-lg hover:scale-125 transform transition duration-300"
            />
            <img
              src="/aboutsec3.jpg"
              alt="Center"
              className="absolute top-1/2 left-1/2 w-40 h-40 md:w-52 md:h-52 transform -translate-x-1/2 -translate-y-1/2 object-cover rounded-full shadow-xl border-4 border-white hover:scale-125 transition duration-300"
            />
            <img
              src="/aboutsec4.jpg"
              alt="Bottom Left"
              className="absolute bottom-0 left-4 w-28 h-28 md:w-36 md:h-36 object-cover rounded-lg shadow-md hover:scale-125 transform transition duration-300"
            />
            <img
              src="/aboutsec5.jpg"
              alt="Bottom Right"
              className="absolute bottom-0 right-4 w-28 h-28 md:w-36 md:h-36 object-cover rounded-lg shadow-md hover:scale-125 transform transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
            Why Should You Attend?
          </h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
            Whether you are an AI enthusiast or just curious about what machine
            learning even is,{" "}
            <span className="text-green-700 font-semibold">
              IndabaX Equatorial Guinea
            </span>{" "}
            is the place to be. We are combining informative talks, hands-on
            workshops, and enough brain stimulation to have your interest
            piqued.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="relative bg-white border border-gray-200 rounded-xl shadow-md px-6 py-8 hover:shadow-lg transition duration-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-green-600 rounded-t-xl" />
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-gray-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 12.414A4 4 0 0012 4a4 4 0 00-1.414 7.757L6.343 16.657a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Network
              </h3>
              <p className="text-sm text-gray-600">
                Connect with brilliant minds from across the continent.
                Students, professionals, researchers. They will all be here.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white border border-gray-200 rounded-xl shadow-md px-6 py-8 hover:shadow-lg transition duration-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-red-500 rounded-t-xl" />
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-gray-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12V4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Learn New Things
              </h3>
              <p className="text-sm text-gray-600">
                From AI ethics to computer vision, you will leave knowing way
                more than you came with.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white border border-gray-200 rounded-xl shadow-md px-6 py-8 hover:shadow-lg transition duration-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-green-600 rounded-t-xl" />
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-gray-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Become Inspired
              </h3>
              <p className="text-sm text-gray-600">
                Hear from thought leaders who are shaping Africa’s AI future.
                Their journeys might just kickstart yours.
              </p>
            </div>
          </div>

          <p className="mt-12 text-lg font-medium text-gray-800">
            So what are you waiting for?{" "}
            <span className="text-red-600 font-bold">Mark your calendar</span>,
            grab your spot, and come join the AI movement!
          </p>
        </div>
      </section>

      {/* Invitation and countdown */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <CountdownTimer targetDate="2025-07-01T00:00:00" />
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
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-12">
            What People Are Saying
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white max-w-xs w-full p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
              >
                <div className="text-5xl text-green-500 mb-4">“</div>

                <p className="italic text-gray-700 mb-4">"{t.quote}"</p>

                <div className="w-16 h-16 mb-2 rounded-full bg-gray-200 overflow-hidden">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <p className="font-semibold text-gray-900">{t.name}</p>
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
