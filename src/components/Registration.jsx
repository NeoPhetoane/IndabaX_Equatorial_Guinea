export default function Registration() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-[url('/hero5.jpg')] bg-cover bg-center text-white text-center py-24 px-4 relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Register for IndabaX 2025</h1>
          <p className="mt-4 text-xl">
            Be part of the AI movement in Equatorial Guinea
          </p>
        </div>
      </section>

      {/* Event Info & Form */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Event Details */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Event Details
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>
                <strong>Date:</strong> August 15, 2025
              </li>
              <li>
                <strong>Location:</strong> Malabo, Equatorial Guinea
              </li>
              <li>
                <strong>Venue:</strong> Universidad Nacional de Guinea
                Ecuatorial
              </li>
              <li>
                <strong>Who should attend?</strong> Students, researchers,
                developers, and anyone passionate about AI/ML in Africa.
              </li>
              <li>
                <strong>What to expect:</strong> Inspiring talks, hands-on
                workshops, community building, and exciting networking
                opportunities.
              </li>
            </ul>
          </div>

          {/* Custom Registration Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-700">
              Register Now
            </h2>
            <form className="bg-white p-8 rounded-lg shadow space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label htmlFor="affiliation" className="block font-medium mb-2">
                  Affiliation (e.g., University or Company)
                </label>
                <input
                  id="affiliation"
                  name="affiliation"
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label htmlFor="interests" className="block font-medium mb-2">
                  Areas of Interest
                </label>
                <textarea
                  id="interests"
                  name="interests"
                  rows="3"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
