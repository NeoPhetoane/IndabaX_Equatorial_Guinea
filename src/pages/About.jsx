import React from "react";
import { Link } from "react-router-dom";
import OrganisingTeam from "../components/OrganisingTeam";
import { HeartHandshake, HandshakeIcon, LucideShrub } from "lucide-react";
import FAQ from "../components/FAQ";
import Statistics from "../components/Statistics";

export default function About() {
  return (
    <main
      className="font-[Jost] text-gray-800"
      style={{ backgroundImage: "url('/bgwhite.png')" }}
    >
      {/* Hero banner for About page */}
      <section className="bg-[url('/hero10.jpg')] bg-cover bg-center text-white text-center py-32 px-4">
        <h1 className="text-5xl md:text-6xl font-bold">About IndabaX</h1>
        <p className="mt-4 text-xl md:text-2xl">Empowering AI in Africa</p>
      </section>

      {/* About Deep Learning Indaba */}

      <section className="max-w-7xl mx-auto mb-10 w-full flex flex-col items-center py-20 px-6">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Deep Learning Indaba
        </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl text-center">
          The parent organisation of the{" "}
          <span className="text-true-blue font-semibold">IndabaX</span>. Before
          the IndabaX Equatorial Guinea, there was the Deep Learning Indaba:
        </p>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <img className="object-bottom rounded-md" src="hero3.jpg" alt="" />

            <div>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl"></h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                The Deep Learning Indaba is a pan-African initiative dedicated
                to strengthening African machine learning and artificial
                intelligence. It brings together researchers, students, and
                professionals from across the continent to share knowledge,
                foster collaboration, and build a vibrant AI community. Through
                annual conferences, local events, and educational programs, the
                Indaba aims to empower the next generation of African innovators
                by promoting excellence in research, inclusion, and the
                responsible use of AI to address the continent’s unique
                challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About IndabaX Equatorial Guinea */}

      <section className="max-w-7xl mx-auto mb-10 w-full flex flex-col items-center py-20 px-6">
        <h2 className="text-3xl font-bold text-center leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          IndabaX Equatorial Guinea
        </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl text-center">
          See what IndabaX is all about in Equatorial Guinea.
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Mission */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-4">
              IndabaX Equatorial Guinea is dedicated to promoting machine
              learning and artificial intelligence education, collaboration, and
              innovation in our local communities. As a proud extension of the
              Deep Learning Indaba, we aim to bridge knowledge gaps and provide
              a platform for future African leaders in tech.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">
              Our Vision
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              The Deep Learning Indaba is a pan-African movement to strengthen
              AI and machine learning communities across the continent.
              “IndabaX” events are local gatherings — the “X” meaning a branch —
              organized by passionate community leaders in their own countries
              to spread knowledge and create new connections.
            </p>
          </div>

          {/* Core Values */}
          <div>
            <p className="text-lg md:text-xl text-true-blue font-semibold mb-6 text-center md:text-left">
              At IndabaX Equatorial Guinea, we aim for:
            </p>
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-gray-300 rounded-full p-3">
                  <HeartHandshake className="text-true-yellow w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-md font-semibold text-gray-800">
                    Inclusivity
                  </h3>
                  <p className="text-sm text-gray-600">
                    We strive to create opportunities for everyone to learn and
                    grow, regardless of background.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-gray-300 rounded-full p-3">
                  <HandshakeIcon className="text-true-yellow w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-md font-semibold text-gray-800">
                    Knowledge Sharing
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sharing and democratizing access to AI and ML education is
                    central to our goals.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-gray-300 rounded-full p-3">
                  <LucideShrub className="text-true-yellow w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-md font-semibold text-gray-800">
                    Empowerment
                  </h3>
                  <p className="text-sm text-gray-600">
                    We empower local talent by connecting them with resources
                    and global leaders in the field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Statistics />

      <OrganisingTeam />
      <FAQ />

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
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
