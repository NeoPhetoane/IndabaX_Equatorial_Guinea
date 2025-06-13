import { useState } from "react";
import { PointerIcon } from "lucide-react";

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
    <main className="font-[Jost] text-gray-800">
      {/* Hero */}
      {/* <section className="bg-[url('/hero5.png')] bg-cover bg-center text-white text-center py-24 px-4 relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Register for IndabaX 2025</h1>
          <p className="mt-4 text-xl">
            Be part of the AI movement in Equatorial Guinea
          </p>
        </div>
      </section> */}

      {/* Image section*/}

      <section class="bg-white">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
            <div class="absolute inset-0">
              <img
                class="object-cover w-full h-full"
                src="eventsbanner.jpg"
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div class="relative">
              <div class="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                <h3 class="text-4xl font-bold text-white">
                  Join any of our events <br class="hidden xl:block" />
                  that may interest you
                </h3>
                <ul class="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                  <li class="flex items-center space-x-3">
                    <div class="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full">
                      <PointerIcon className="w-8 h-8 text-white" />
                    </div>
                    <span class="text-lg font-medium text-white">
                      {" "}
                      IndabaX Yearly Conference{" "}
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <PointerIcon className="w-3 h-3 text-white" />
                    </div>
                    <span class="text-lg font-medium text-white">
                      {" "}
                      Our hackathons{" "}
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <PointerIcon className="w-3 h-3 text-white" />
                    </div>
                    <span class="text-lg font-medium text-white">
                      {" "}
                      Online seminars and webinars{" "}
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <PointerIcon className="w-3 h-3 text-white" />
                    </div>
                    <span class="text-lg font-medium text-white">
                      {" "}
                      AI Award Ceremonies{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign up for Upcoming Events
              </h2>

              {/* Form */}
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
                >
                  Submit Registration
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
