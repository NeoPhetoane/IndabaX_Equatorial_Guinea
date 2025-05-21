import { Link } from "react-router-dom";

const schedule = [
  {
    day: "Day 1 - Workshops & Tutorials",
    date: "June 10, 2025",
    sessions: [
      {
        time: "09:00 - 09:30",
        title: "Opening Remarks",
        speaker: "Organizing Committee",
      },
      {
        time: "09:30 - 11:00",
        title: "Intro to Machine Learning Workshop",
        speaker: "Prof. João Ebana",
      },
      {
        time: "11:15 - 13:00",
        title: "AI for Agriculture",
        speaker: "Amina Ndong",
      },
      {
        time: "14:00 - 16:00",
        title: "Natural Language Processing Tutorial",
        speaker: "Carlos Obiang",
      },
    ],
  },
  {
    day: "Day 2 - Keynotes & Panels",
    date: "June 11, 2025",
    sessions: [
      {
        time: "09:00 - 10:00",
        title: "Keynote: The Future of AI in Africa",
        speaker: "Dr. Maria Nguema",
      },
      {
        time: "10:30 - 12:00",
        title: "Panel: Ethics in African AI Development",
        speaker: "Various Speakers",
      },
      {
        time: "13:00 - 15:00",
        title: "Startups & Innovation Showcase",
        speaker: "EquaTech, AfriData, etc.",
      },
    ],
  },
  {
    day: "Day 3 - Community & Closing",
    date: "June 12, 2025",
    sessions: [
      {
        time: "09:00 - 10:30",
        title: "AI in Education: Opportunities & Challenges",
        speaker: "Local Educators",
      },
      {
        time: "11:00 - 12:00",
        title: "Community Roundtables",
        speaker: "All Participants",
      },
      {
        time: "13:00 - 14:00",
        title: "Closing Ceremony",
        speaker: "Organizing Committee",
      },
    ],
  },
];

export default function Schedule() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero Banner */}
      <section className="relative bg-[url('/hero8.jpg')] bg-cover bg-center text-white text-center py-32 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold">Event Schedule</h1>
          <p className="mt-4 text-xl md:text-2xl">
            3 Days of Learning, Collaboration & Growth
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="bg-gradient-to-tr from-green-100 via-white to-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {schedule.map((day, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-2">{day.day}</h2>
              <p className="text-lg text-gray-700 mb-4">{day.date}</p>

              <div className="space-y-6">
                {day.sessions.map((session, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 shadow hover:shadow-md transition"
                  >
                    <p className="text-sm text-gray-500">{session.time}</p>
                    <h3 className="text-xl font-semibold text-green-700">
                      {session.title}
                    </h3>
                    <p className="text-sm text-blue-700">{session.speaker}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Don't Miss a Session!</h2>
        <p className="text-lg mb-6 text-gray-700">
          Be part of every workshop, keynote, and panel. Register now to secure
          your spot.
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
