import { useState } from "react";

const events = [
  "Tech Conference 2025",
  "AI & ML Summit",
  "Web Dev Workshop",
  "Startup Pitch Night",
  "Cloud Expo",
];

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    alert("Registered successfully!");
  };
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

      {/* Form */}
      <section className="min-h-screen text-gray-800">
        <div className="min-h-screen bg-gradient-to-tr from-green-100 via-white to-red-100 flex flex-col items-center justify-center px-4">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
            Register Here
          </h2>
          <p>Enter your details here, and join us at our exiting events</p>
          <div className="backdrop-blur-lg bg-white/70 shadow-xl rounded-2xl p-12 w-[90%] sm:w-[80%] lg:w-[70%] max-w-5xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Event
                </label>
                <select
                  name="event"
                  required
                  value={formData.event}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">-- Choose an event --</option>
                  {events.map((event, idx) => (
                    <option key={idx} value={event}>
                      {event}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300 font-semibold"
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
