import { Link } from "react-router-dom";
import { ArrowRight, Calendar1, Locate, MoveUpRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

export default function SiteHero() {
  return (
    <main>
      <section
        className="relative bg-cover bg-center text-white py-20 px-4 sm:px-8 md:px-20"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.99) 0%, rgba(0,0,0,0.0) 100%)",
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-row items-stretch space-x-6">
          {/* Content */}
          <div className="flex-1 flex flex-col justify-center items-start text-left space-y-6 py-4">
            <h1 className="text-3xl md:text-5xl font-semibold">Welcome to</h1>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 via-white to-yellow-400 bg-clip-text text-transparent">
              IndabaX Equatorial Guinea
            </h1>
            <p className="text-md md:text-xl">
              IndabaX Equatorial Guinea is a local chapter of the Deep Learning
              Indaba movement.
              <br></br>We bring together researchers, students, and AI
              enthusiasts to share knowledge<br></br> and build community.
              Empowering the future of <br></br>machine learning across Africa,
              one conversation at a time.
            </p>
            <p className="text-2xl md:text-2xl font-semibold text-true-blue">
              Be sure to not miss the next event:
            </p>
            <div className="flex items-center gap-2">
              <Locate className="text-lg md:text-2xl" />
              <span className="text-lg md:text-2xl">
                Malabo, Equatorial Guinea
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar1 className="text-lg md:text-2xl" />
              <span className="text-lg md:text-2xl">7-19 July 2025</span>
            </div>

            <CountdownTimer targetDate="2025-07-01T00:00:00" />
            <div className="flex flex-col md:flex-row items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4">
              <Link to="/about" className="w-full md:w-auto">
                <button className="w-full md:w-auto flex justify-center items-center gap-2 hover:bg-true-blue text-white border border-white text-base md:text-xl font-semibold py-4 px-6 md:py-6 md:px-10 rounded-full transition animate-pulse-slow">
                  Learn More <MoveUpRight className="inline" />
                </button>
              </Link>
              <Link to="/registration" className="w-full md:w-auto">
                <button className="w-full md:w-auto flex justify-center items-center gap-2 bg-true-blue hover:bg-white text-white text-base md:text-xl font-semibold py-4 px-6 md:py-6 md:px-10 rounded-full transition animate-pulse-slow">
                  Register Now <ArrowRight className="inline" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
