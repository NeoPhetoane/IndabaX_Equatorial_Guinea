import { Phone, MailOpen, Smartphone, MonitorSmartphone } from "lucide-react";

const Contact = () => {
  return (
    <main className="font-[Jost] text-gray-800">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/Background.png')" }}
      >
        {/* Hero banner for contact page */}
        <section class="py-10 sm:py-16 lg:py-24">
          <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Contact Us
              </h2>
              <p className="text-lg text-white mb-10 leading-relaxed max-w-3xl text-center">
                We would love to hear from you! Whether you have questions about
                our events, want to collaborate, or just want to say hello, feel
                free to reach out.
              </p>
            </div>

            <div class="max-w-5xl mx-auto mt-12 sm:mt-16">
              <div class="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                <div class="overflow-hidden bg-white rounded-xl">
                  <div class="p-6">
                    <Phone
                      class="flex-shrink-0 w-10 h-10 mx-auto text-true-blue"
                      strokeWidth={1}
                    />
                    <p class="mt-6 text-lg font-medium text-gray-900">
                      0123 456 789
                    </p>
                    {/* <p class="mt-1 text-lg font-medium text-gray-900">
                    +1-446-526-0117
                  </p> */}
                  </div>
                </div>

                <div class="overflow-hidden bg-white rounded-xl">
                  <div class="p-6">
                    <MailOpen
                      class="flex-shrink-0 w-10 h-10 mx-auto text-true-blue"
                      strokeWidth={1}
                    />
                    <p class="mt-6 text-lg font-medium text-gray-900 break-all">
                      indabaXequatorialguinea<br></br>@gmail.com
                    </p>
                    {/* <p class="mt-1 text-lg font-medium text-gray-900">
                     hr@example.com 
                  </p> */}
                  </div>
                </div>

                <div class="overflow-hidden bg-white rounded-xl">
                  <div class="p-6 text-center">
                    <MonitorSmartphone
                      class="flex-shrink-0 w-10 h-10 mx-auto text-true-blue"
                      strokeWidth={1}
                    />
                    <div className="flex justify-center space-x-4 mt-2">
                      <a
                        href="https://x.com/deeplearningindabaequatorialguinea"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                        className="mt-1 text-lg font-medium text-gray-900 hover:text-yellow transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-7 h-7"
                        >
                          <path d="M19.778 4.222a9.99 9.99 0 0 0-14.142 0 9.99 9.99 0 0 0 0 14.142 9.99 9.99 0 0 0 14.142 0 9.99 9.99 0 0 0 0-14.142Zm-1.394 12.748h-2.023l-3.13-4.27-2.37 2.916v1.354H8.318v-1.84l2.7-3.262-2.7-3.678V6.964h2.023l2.818 3.846 2.116-2.672h1.948l-2.81 3.533 2.961 4.2Z" />
                        </svg>
                      </a>

                      <a
                        href="https://facebook.com/deeplearningindabaequatorialguinea"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="mt-1 text-lg font-medium text-gray-900 hover:text-yellow transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.626h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0Z" />
                        </svg>
                      </a>

                      <a
                        href="https://linkedin.com/deeplearningindabaequatorialguinea"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="mt-1 text-lg font-medium text-gray-900 hover:text-yellow transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path d="M20.447 20.452h-3.554v-5.568c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.666h-3.554V9h3.414v1.561h.05c.475-.9 1.637-1.848 3.369-1.848 3.6 0 4.266 2.37 4.266 5.455v6.284ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.777 13.019H3.56V9h3.554v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6 overflow-hidden bg-white rounded-xl">
                <div class="px-6 py-12 sm:p-12">
                  <h2 className="text-3xl font-bold leading-tight text-center text-gray-900 sm:text-4xl lg:text-5xl">
                    Send us a Message
                  </h2>
                  <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl text-center"></p>

                  <form action="#" method="POST" class="mt-14">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                      <div>
                        <label
                          for=""
                          class="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Your name{" "}
                        </label>
                        <div class="mt-2.5 relative">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter your full name"
                            class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          for=""
                          class="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Email address{" "}
                        </label>
                        <div class="mt-2.5 relative">
                          <input
                            type="email"
                            name=""
                            id=""
                            placeholder="Enter your full name"
                            class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          for=""
                          class="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Phone number{" "}
                        </label>
                        <div class="mt-2.5 relative">
                          <input
                            type="tel"
                            name=""
                            id=""
                            placeholder="Enter your full name"
                            class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          for=""
                          class="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Company name{" "}
                        </label>
                        <div class="mt-2.5 relative">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter your full name"
                            class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div class="sm:col-span-2">
                        <label
                          for=""
                          class="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Message{" "}
                        </label>
                        <div class="mt-2.5 relative">
                          <textarea
                            name=""
                            id=""
                            placeholder=""
                            class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                            rows="4"
                          ></textarea>
                        </div>
                      </div>

                      <div class="sm:col-span-2">
                        <button
                          type="submit"
                          class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-true-blue border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      ;{/* Map */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold leading-tight text-center text-gray-900 sm:text-4xl lg:text-5xl">
          Find Us In Person
        </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl text-center"></p>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-true-blue">
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
