export default function Sponsors() {
  const sponsors = [
    {
      name: "Deep Learning Indaba",
      logo: "/logo.png",
    },
    {
      name: "National University of Equatorial Guinea",
      logo: "/EQUniversity.jpg",
    },
    {
      name: "InsaDeep",
      logo: "/InstaDeep.jpg",
    },
    {
      name: "Biofit",
      logo: "/sponsors/biofit.png",
    },
    {
      name: "DanceMedia Events Calendar",
      logo: "/sponsors/dancemedia.png",
    },
    {
      name: "EventsAir",
      logo: "/sponsors/eventsair.png",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Sponsors & Partners
        </h2>
        <p className="text-gray-600 mb-10">
          We thank our generous sponsors for supporting IndabaX Equatorial
          Guinea.
        </p>
        <div className="overflow-hidden">
          <div className="flex animate-scroll-sponsors gap-6 items-center w-max">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-16 w-auto mx-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
