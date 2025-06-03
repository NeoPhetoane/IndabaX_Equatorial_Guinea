import React from "react";
import { Link } from "react-router-dom";
import OrganisingTeam from "../components/OrganisingTeam";
import { HeartHandshake, HandshakeIcon, LucideShrub } from "lucide-react";
import FAQ from "../components/FAQ";
import Statistics from "../components/Statistics";

export default function About() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero banner for About page */}
      <section className="bg-[url('/hero4.jpg')] bg-cover bg-center text-white text-center py-32 px-4">
        <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
        <p className="mt-4 text-xl md:text-2xl">Empowering AI in Africa</p>
      </section>

      {/* Mission Section */}
      <section className="relative bg-gradient-to-tr from-green-100 via-white to-red-100 py-16 px-6 overflow-hidden text-center">
        {/* <img
          src="/nopicture.jpg"
          // alt="AI Chip"
          className="absolute w-16 h-16 animate-float-slow top-12 left-12 opacity-30"
        />
        <img
          src="/nopicture.jpg"
          // alt="Flag"
          className="absolute w-24 h-16 animate-pulse-slow top-1/2 right-0 transform -translate-y-1/2 opacity-40"
        /> */}

        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            IndabaX Equatorial Guinea is dedicated to promoting machine learning
            and artificial intelligence education, collaboration, and innovation
            in our local communities. As a proud extension of the Deep Learning
            Indaba, we aim to bridge knowledge gaps and provide a platform for
            future African leaders in tech.
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            The Deep Learning Indaba is a pan-African movement to strengthen AI
            and machine learning communities across the continent. “IndabaX”
            events are local gatherings — the “X” meaning a branch — organized
            by passionate community leaders in their own countries to spread
            knowledge and create new connections.
          </p>
        </div>

        {/* Core Values Section */}

        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10">
          At IndabaX Equatorial Guinea, we aim for:
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative bg-white border border-gray-200 rounded-xl shadow-md px-6 py-8 hover:shadow-lg transition duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-green-600 rounded-t-xl" />
            <div className="mb-4">
              <HeartHandshake className="text-green-600 items-center" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Inclusivity
            </h3>
            <p className="text-sm text-gray-600">
              We strive to create opportunities for everyone to learn and grow,
              regardless of background.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white border border-gray-200 rounded-xl shadow-md px-6 py-8 hover:shadow-lg transition duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-red-500 rounded-t-xl" />
            <div className="mb-4">
              <HandshakeIcon className="text-green-600 items-center" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Knowledge Sharing
            </h3>
            <p className="text-sm text-gray-600">
              Sharing and democratizing access to AI and ML education is central
              to our goals.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white border border-gray-200 rounded-xl shadow-md px-6 py-8 hover:shadow-lg transition duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-green-600 rounded-t-xl" />
            <div className="mb-4">
              <LucideShrub className="text-green-600 items-center" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Empowerment
            </h3>
            <p className="text-sm text-gray-600">
              We empower local talent by connecting them with resources and
              global leaders in the field.
            </p>
          </div>
        </div>
      </section>
      <Statistics />

      <OrganisingTeam />
      <FAQ />

      {/* Call to Action */}
      <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Get Involved?</h2>
        <p className="text-lg mb-6 text-gray-700">
          Whether you're a student, educator, or professional — join us in
          shaping the future of AI in Africa.
        </p>
        <Link
          to="/registration"
          className="bg-red-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Register Now
        </Link>
      </section>
    </main>
  );
}
