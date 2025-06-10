import { Link } from "react-router-dom";
import { ArrowRight, Calendar1, Locate } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

export default function SiteHero() {
  return (
    <main>
      <section
        className="relative bg-cover bg-center text-white py-20 px-4 sm:px-8 md:px-20"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-row items-stretch space-x-6">
          {/* Content */}
          <div className="flex-1 flex flex-col justify-center items-start text-left space-y-6 py-4">
            <h1 className="text-4xl md:text-6xl font-bold">WELCOME TO</h1>
            <h1 className="text-4xl md:text-6xl text-true-blue font-bold">
              INDABAX EQUATORIAL GUINREA
            </h1>
            <p className="text-lg md:text-2xl">
              IndabaX Equatorial Guinea is a local chapter of the Deep Learning
              Indaba movement. We bring together researchers, students, and AI
              enthusiasts to share knowledge and build community. Empowering the
              future of machine learning across Africa, one conversation at a
              time.
            </p>
            <p className="text-lg md:text-2xl">Do not miss the next event: </p>

            <div className="flex items-center gap-2">
              <Calendar1 className="text-lg md:text-2xl" />
              <span className="text-lg md:text-2xl">7-19 July 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Locate className="text-lg md:text-2xl" />
              <span className="text-lg md:text-2xl">
                Malabo, Equatorial Guinea
              </span>
            </div>
            <CountdownTimer targetDate="2025-07-01T00:00:00" />
            <Link
              to="/registration"
              className="bg-true-blue hover:bg-blue-800 text-white text-xl font-semibold py-6 px-10 rounded-full transition animate-pulse-slow inline-flex items-center gap-2"
            >
              Register Now <ArrowRight className="inline" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
