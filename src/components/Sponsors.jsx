export default function Sponsors() {
  const sponsors = [
    {
      name: "Deep Learning Indaba",
      logo: "/deeplearningindaba.png",
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
      name: "AI Expo Africa",
      logo: "/ai_expo_2023.png",
    },
    // {
    //   name: "Google DeepMind",
    //   logo: "/Google_DeepMind.png",
    // },
    {
      name: "IMB",
      logo: "/ibm.jpg",
    },
    {
      name: "OpenAI",
      logo: "/openai-lockup.png",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-left md:text-center">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Our Sponsors & Partners
        </h2>
        <p className="text-gray-600 mb-10">
          We thank our generous sponsors for supporting IndabaX Equatorial
          Guinea.
        </p>
        <div className="overflow-hidden">
          <div className="flex animate-scroll-sponsors gap-6 items-center w-max">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={index}>
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-20 w-auto mx-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
