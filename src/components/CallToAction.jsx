import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <main>
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto bg-true-blue border-4 border-yellow-100 rounded-full shadow-xl px-6 py-12 text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Want to Get Involved?
          </h2>
          <p className="text-lg mb-6 text-white">
            Whether you're a student, educator, or professional — join us in
            shaping the future of AI in Africa.
          </p>
          <Link
            to="/registration"
            className="bg-white hover:bg-yellow-300 text-true-blue hover:text-true-blue font-semibold py-3 px-6 rounded-lg shadow transition"
          >
            Register Now
          </Link>
        </div>
      </section>
    </main>
  );
}
