const Contact = () => {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero banner for contact page */}
      <section className="bg-[url('/hero6.jpg')] bg-cover bg-center text-white py-32 px-4 space-x-2">
        <h1 className="text-5xl md:text-6xl font-bold">Contact Us</h1>
        <p className="mt-4 text-xl md:text-2xl">
          Do not hesitate to reach out.
        </p>
      </section>
      {/* Contact Form */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-red-700">
            Have Questions?
          </h2>
          <p className="mb-6 text-gray-700">
            Use the form below to reach out to us, or email us directly at{" "}
            <a
              href="mailto:indabaXequatorialguinea@gmail.com"
              className="text-blue-600 underline"
            >
              indabaXequatorialguinea@gmail.com
            </a>
          </p>
          <form className="space-y-6 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      ;{/* Map */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">
            Venue Location
          </h2>
          <p className="mb-4 text-gray-700">Find us at UNGE campus, Malabo</p>
          <div className="rounded overflow-hidden shadow-lg">
            {/*University as placeholder*/}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4230.8181267907585!2d8.771899019849892!3d3.7468403485510025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10669ef3e81df6a1%3A0x4efa707a2a890a2d!2sUniversidad%20Nacional%20de%20Guinea%20Ecuatorial!5e0!3m2!1sen!2sza!4v1747305438781!5m2!1sen!2sza"
              width="100%"
              height="450"
              className="border-0 w-full h-96"
              title="Venue Map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      ;
    </main>
  );
};

export default Contact;
