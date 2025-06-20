import { Link } from "react-router-dom";
import UpcomingEvents from "../components/UpcomingEvents";
import OrganisingTeam from "../components/OrganisingTeam";
import SiteHero from "../components/SiteHero";
import {
  PinIcon,
  BrainIcon,
  LucideLightbulb,
  LucideAirplay,
  Star,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Sponsors from "../components/Sponsors";
import Statistics from "../components/Statistics";
import OrganisingTeamHome from "../components/TeamOnHome";

export default function Home() {
  return (
    <main className="font-[Jost] text-gray-800 ">
      {/* Hero Section */}
      <SiteHero />

      {/* Why Attend Section */}
      <section
        className="bg-yellow py-20 px-4"
        style={{ backgroundImage: "url('/bgwhite.png')" }}
      >
        {/* Heading and Paragraph */}
        <div className="max-w-7xl mx-auto mb-10 w-full flex flex-col items-start md:items-center mb-6 md:mb-10">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl text-left md:text-center">
            Why Should You Attend?
          </h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl text-center text-left md:text-center">
            Whether you are an AI enthusiast or just curious about what machine
            learning even is,{" "}
            <span className="text-true-blue font-semibold text-left md:text-center">
              IndabaX Equatorial Guinea
            </span>{" "}
            is the place to be. We are combining informative talks, hands-on
            workshops, and enough brain stimulation to have your interest
            piqued.
          </p>

          <div className="flex flex-col md:flex-row items-stretch gap-10 w-full">
            {/* Left: Image with aspect ratio */}
            <div className="w-full md:w-1/2">
              <img
                src="/why1.jpg"
                alt="Why Attend"
                className="w-full h-full object-bottom"
              />
            </div>

            {/* Right: Benefits List */}
            <div className="w-full md:w-1/2 px-4">
              <div className="bg-white px-5 py-6 lg:py-16 lg:px-10 h-full rounded-xl shadow-md">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
                  <div className="flex items-start">
                    <PinIcon className="text-true-blue w-15 h-15" />
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-black">
                        Network
                      </h3>
                      <p className="mt-4 text-base text-gray-600">
                        Connect with brilliant minds from across the continent.
                        Students, professionals, researchers. They will all be
                        here.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <BrainIcon className="text-true-blue w-15 h-15" />
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-black">
                        Learn New Things
                      </h3>
                      <p className="mt-4 text-base text-gray-600">
                        From AI ethics to computer vision, you will leave
                        knowing way more than you came with.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Lightbulb className="text-true-blue w-15 h-15" />
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-black">
                        Become Inspired
                      </h3>
                      <p className="mt-4 text-base text-gray-600">
                        Hear from thought leaders who are shaping Africa’s AI
                        future. Their journeys might just kickstart yours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Star className="text-true-blue w-15 h-15" />
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-black">
                        Showcase Your Work
                      </h3>
                      <p className="mt-4 text-base text-gray-600">
                        Whether you are a student or a professional, this is
                        your chance to present your projects and get feedback
                        from experts.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/events"
                  aria-label="See IndabaX 2025"
                  className="inline-block mt-10 bg-true-blue text-white hover:bg-yellow hover:text-true-blue font-semibold py-3 px-8 rounded-lg transition"
                >
                  See IndabaX 2025 <ArrowUpRight className="inline ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <Statistics />

      {/* Organising Team Section */}

      {/* Organising Team */}
      <OrganisingTeamHome />

      {/* About Section */}

      <section className="py-10 px-4 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <img
              className="w-full h-full object-bottom rounded-md"
              src="about.png"
              alt=""
            />

            <div>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                About IndabaX Equatorial Guinea
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                IndabaX Equatorial Guinea is a local chapter of the Deep
                Learning Indaba, a pan-African movement to strengthen African
                AI. Our event offers a unique space for knowledge sharing,
                community building, and research advancement. It is open to
                students, professionals, and enthusiasts who want to engage with
                cutting-edge developments in AI, collaborate with others, and
                grow their careers through meaningful connections.
                <br />
                <br />
                We aim to advance our resourceful country using Artificial
                Intelligence and reach unimaginable heights
              </p>
              {/* Learn More Button */}
              <div className="mt-6">
                <Link
                  to="/about"
                  className="inline-block bg-true-blue hover:bg-true-blue text-white font-semibold py-2 px-5 rounded transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Sponsors />
      <UpcomingEvents />
      <Testimonials />

      <CallToAction />
    </main>
  );
}
