import Carousel from "./Carousel";

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

export default function Testimonials() {
  // Create the cards array from testimonial data
  const testimonialCards = testimonials.map((t, index) => (
    <div
      key={index}
      className="bg-white max-w-xs w-full p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
    >
      <div className="text-5xl text-true-blue mb-4">“</div>

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
  ));

  return (
    <main>
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-12">
            What People Are Saying
          </h2>

          {/* Carousel here */}
          <Carousel cards={testimonialCards} />
        </div>
      </section>
    </main>
  );
}
