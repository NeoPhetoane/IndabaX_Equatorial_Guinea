import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SiteHero() {
  return (
    <section
      className="relative bg-cover bg-center text-white text-center py-55 px-4 sm:px-8 md:px-20"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to{" "}
          <span className="text-true-yellow font-semibold">
            IndabaX Equatorial Guinea
          </span>{" "}
        </h1>
        <p className="text-lg md:text-2xl">
          IndabaX Equatorial Guinea is a local chapter of the Deep Learning
          Indaba movement. We bring together researchers, students, and AI
          enthusiasts to share knowledge and build community. Empowering the
          future of machine learning across Africa, one conversation at a time.
        </p>
        <p className="text-lg md:text-2xl">Do not miss the next event: </p>
        <Link
          to="/registration"
          className="bg-true-blue hover:true-blue text-true-yellow text-xl font-semibold py-6 px-10 rounded-full transition animate-pulse-slow"
        >
          Register Now <ArrowRight className="inline" />
        </Link>
      </div>
    </section>
  );
}
