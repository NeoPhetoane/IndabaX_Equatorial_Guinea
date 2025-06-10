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

function TestimonialCard({ t }) {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative flex-shrink-0 w-48 h-48 mx-auto md:mx-0 md:mr-8">
            <div className="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
            <img
              className="relative object-cover w-48 h-48 rounded-full"
              src={t.image}
              alt={t.name}
            />
          </div>
          <div className="mt-10 md:mt-0 text-center md:text-left md:ml-8">
            <blockquote>
              <p className="text-xl text-black">“{t.quote}”</p>
            </blockquote>
            <p className="text-lg font-semibold text-black mt-7">{t.name}</p>
            <p className="mt-1 text-base text-gray-600">{t.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Testimonials() {
  // Prepare cards for the Carousel
  const testimonialCards = testimonials.map((t, idx) => (
    <TestimonialCard t={t} key={idx} />
  ));

  return (
    <main>
      <section
        className="py-20 px-6"
        style={{ backgroundImage: "url('/bgwhite.png')" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-12">
            What People Are Saying
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Hear from past attendees about their experiences at IndabaX
            Equatorial Guinea.
          </p>
          <Carousel cards={testimonialCards} />
        </div>
      </section>
    </main>
  );
}
