import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <main>
      <section
        className="py-16 text-center"
        style={{ backgroundImage: "url('/bgwhite.png')" }}
      >
        <h2 className="text-3xl font-bold mb-4">Want to Get Involved?</h2>
        <p className="text-lg mb-6 text-gray-700">
          Whether you're a student, educator, or professional — join us in
          shaping the future of AI in Africa.
        </p>
        <Link
          to="/registration"
          className="bg-true-blue hover:bg-yellow text-true-yellow font-semibold py-3 px-6 rounded-lg transition"
        >
          Register Now
        </Link>
      </section>
    </main>
  );
}
