import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 overflow-hidden shadow-lg">
          {/* Text Section */}
          {/* Text Section */}
          <div className="md:w-1/2 p-8 text-white flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Want to Get Involved?
            </h2>
            <p className="text-lg mb-6 text-white">
              Whether you're a student, educator, or professional — join us in
              shaping the future of AI in Africa.
            </p>
            <Link
              to="/registration"
              className="self-start bg-white hover:bg-yellow-300 text-true-blue hover:text-true-blue font-semibold py-3 px-6 rounded-lg shadow transition"
            >
              Register Now
            </Link>
          </div>

          {/* Image Section aligned to bottom */}
          <div className="md:w-1/2 flex items-end mt-10">
            <img
              src={"cta1.jpg"}
              alt="CTA Visual"
              className="w-full object-cover object-top max-h-[250px] md:max-h-[300px] lg:max-h-[340px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
