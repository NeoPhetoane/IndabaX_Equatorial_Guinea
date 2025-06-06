import { Link } from "react-router-dom";
import UpcomingEvents from "../components/UpcomingEvents";
import OrganisingTeam from "../components/OrganisingTeam";
import ScheduleHighlights from "../components/ScheduleHighlights";
import SiteHero from "../components/SiteHero";
import Hero2025 from "../components/Hero2025";
import { PinIcon, BrainIcon, LucideLightbulb } from "lucide-react";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Sponsors from "../components/Sponsors";

export default function Home() {
  return (
    <main className="font-sans text-gray-800 ">
      {/* Hero Section */}
      <SiteHero />
      <Hero2025 />

      {/* Why Attend Section */}
      <section className="bg-yellow py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
            Why Should You Attend?
          </h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
            Whether you are an AI enthusiast or just curious about what machine
            learning even is,{" "}
            <span className="text-true-blue font-semibold">
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
              <div className="absolute top-0 left-0 w-full h-2 bg-true-blue rounded-t-xl" />
              <div className="mb-4">
                <PinIcon className="text-true-blue items-center" />
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
              <div className="absolute top-0 left-0 w-full h-2 bg-true-yellow rounded-t-xl" />
              <div className="mb-4">
                <BrainIcon className="text-true-blue items-center" />
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
              <div className="absolute top-0 left-0 w-full h-2 bg-true-blue rounded-t-xl" />
              <div className="mb-4">
                <LucideLightbulb className="text-true-blue items-center" />
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
            <span className="text-true-yellow font-bold">
              Mark your calendar
            </span>
            , grab your spot, and come join the AI movement!
          </p>
        </div>
      </section>
      <ScheduleHighlights />
      {/* Organising Team */}
      <OrganisingTeam />
      {/* About Section */}
      <section className="bg-yellow py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 mt-8 md:mt-20">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              About{" "}
              <span className="text-true-blue">IndabaX Equatorial Guinea</span>
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
              className="inline-block bg-true-yellow hover:bg-true-blue text-true-blue font-semibold py-2 px-5 rounded transition duration-300"
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

      <UpcomingEvents />

      <Testimonials />
      <Sponsors />
      <CallToAction />
    </main>
  );
}
