const upcomingEvents = [
  {
    title: "AI Ethics Workshop",
    date: "June 15, 2025",
    location: "Malabo, Equatorial Guinea",
    description:
      "Explore the ethical implications of AI development and deployment in Africa.",
  },
  {
    title: "Hands-on ML Bootcamp",
    date: "July 20, 2025",
    location: "Bata, Equatorial Guinea",
    description:
      "A full-day practical session on machine learning basics and applications.",
  },
  {
    title: "IndabaX EG 2025",
    date: "September 5–6, 2025",
    location: "Malabo, Equatorial Guinea",
    description:
      "Our flagship Deep Learning event featuring speakers, panels, and networking.",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Upcoming Events
        </h2>
        <p className="text-gray-600 mb-12">
          Stay informed about our latest workshops, meetups, and conferences.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{event.date}</p>
              <p className="text-sm text-gray-500 mb-3">{event.location}</p>
              <p className="text-gray-700 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
