import { Link } from "react-router-dom";

export default function SiteHero() {
  return (
    <section
      className="relative bg-cover bg-center text-white text-center py-65 px-4 sm:px-8 md:px-20"
      style={{ backgroundImage: "url('/hero12.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to IndabaX Equatorial Guinea
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
          className="bg-red-600 hover:bg-green-700 text-white font-bold py-6 px-6 rounded-md transition"
        >
          Register Now
        </Link>
      </div>
    </section>
  );
}
