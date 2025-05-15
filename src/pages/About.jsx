import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const team = [
    {
      name: "Ana María Nchama",
      role: "Lead Organizer",
      bio: "Ana is a machine learning enthusiast focused on community building and AI education in Equatorial Guinea.",
      img: "/team1.jpg",
    },
    {
      name: "David Obiang",
      role: "Technical Lead",
      bio: "David is a software engineer passionate about using AI to solve local challenges.",
      img: "/team2.jpg",
    },
    {
      name: "Lucía Ndong",
      role: "Logistics Coordinator",
      bio: "Lucía ensures smooth operations and handles all event logistics with great detail.",
      img: "/team3.jpg",
    },
  ];

  return (
    <main className="font-sans text-gray-800">
      {/* Hero banner for About page */}
      <section className="bg-[url('/hero4.jpg')] bg-cover bg-center text-white text-center py-32 px-4">
        <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
        <p className="mt-4 text-xl md:text-2xl">Empowering AI in Africa</p>
      </section>

      {/* Mission Section */}
      <section className="relative bg-gradient-to-tr from-green-100 via-white to-red-100 py-16 px-6 overflow-hidden">
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
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10">
          At IndabaX Equatorial Guinea, we aim for:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2 text-green-700">
              Inclusivity
            </h3>
            <p className="text-gray-600">
              We strive to create opportunities for everyone to learn and grow,
              regardless of background.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2 text-blue-700">
              Knowledge Sharing
            </h3>
            <p className="text-gray-600">
              Sharing and democratizing access to AI and ML education is central
              to our goals.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2 text-red-700">
              Empowerment
            </h3>
            <p className="text-gray-600">
              We empower local talent by connecting them with resources and
              global leaders in the field.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Meet the Organizing Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700">
                {member.name}
              </h3>
              <p className="text-sm text-blue-700 font-medium mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

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
