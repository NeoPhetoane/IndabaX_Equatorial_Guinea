import React from "react";
import { Link } from "react-router-dom";
import OrganisingTeam from "../components/OrganisingTeam";
import { HeartHandshake, HandshakeIcon, LucideShrub } from "lucide-react";
import FAQ from "../components/FAQ";
import Statistics from "../components/Statistics";
import CallToAction from "../components/CallToAction";

export default function About() {
  return (
    <main
      className="font-[Jost] text-gray-800"
      style={{ backgroundImage: "url('/bgwhite.png')" }}
    >
      {/* Hero banner for About page */}
      <section className="relative bg-[url('/hero10.jpg')] bg-cover bg-center text-white text-center py-32 px-4">
        <div className="absolute inset-0 bg-black/70"></div>
        <h1 className=" relative text-5xl md:text-6xl font-bold">
          About IndabaX
        </h1>
        <p className="relative mt-4 text-xl md:text-2xl">
          Empowering AI in Africa
        </p>
      </section>

      {/* About Deep Learning Indaba */}

      <section className="max-w-7xl mx-auto w-full flex flex-col items-start md:items-center py-10 px-4">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl text-left md:text-center">
          Deep Learning Indaba
        </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl text-left md:text-center">
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
                challenges. In ordere to put this mission into action, the
                IndabaX events were created:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About IndabaX Equatorial Guinea */}

      <section className="max-w-7xl mx-auto w-full flex flex-col items-left py-10 px-4">
        {/* <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
          IndabaX Equatorial Guinea
        </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl">
          IndabaX is a local chapter of the Deep Learning Indaba, dedicated to
          fostering machine learning and AI education in each African Country.
          Therefore welcoming you to IndabaX Equatorial Guinea.
        </p> */}

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Mission */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left md:text-left">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left md:text-left">
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
            <p className="text-lg md:text-xl text-true-blue font-semibold mb-6 text-left md:text-center">
              At IndabaX Equatorial Guinea, we aim for:
            </p>
            <div className="space-y-6 text-base md:text-lg text-gray-700">
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

      {/* Hackathons */}
      <section className="py-1 px-4 text-left mb-10" id="hackathons">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            IndabaX Hackathons
          </h2>
          <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div className="text-gray-700 text-base md:text-lg text-gray-700 text-left">
              <p>
                IndabaX Hackathons are dynamic, collaborative events where
                participants come together to solve real-world problems using
                data science, machine learning, and artificial intelligence.
                These hackathons serve as a platform for innovation, hands-on
                learning, and community building — empowering emerging
                researchers, developers, and students from across Equatorial
                Guinea to apply their skills and ideas.
              </p>
              <p>
                Organized as part of the broader Deep Learning IndabaX
                initiative, the hackathons foster local talent and provide an
                inclusive space for individuals of all experience levels to
                engage with pressing challenges in healthcare, agriculture,
                climate, education, and more. With mentorship, teamwork, and
                technical workshops, participants not only compete but also
                learn and grow together.
              </p>
              <p>
                Whether you're a beginner or an experienced coder, the IndabaX
                Hackathon is your opportunity to make an impact, collaborate
                with peers, and drive innovation that’s rooted in African
                realities.
              </p>
            </div>
            <img className="object-bottom rounded-md" src="hero4.jpg" alt="" />
          </div>
        </div>
      </section>

      <Statistics />

      <OrganisingTeam />
      <FAQ />

      {/* Call to Action */}
      <CallToAction />
      {/* <section className="py-16 px-6 text-center">
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
      </section> */}
    </main>
  );
}
