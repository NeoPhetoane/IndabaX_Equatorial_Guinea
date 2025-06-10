import { useEffect, useState, useRef } from "react";

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    let observer;
    const node = containerRef.current; // Reference to the container element

    // Animation function to increment the count
    const animate = () => {
      clearInterval(timerRef.current); // Clear any previous interval
      let start = 0;
      const duration = 1500;
      const increment = target / (duration / 10);
      timerRef.current = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timerRef.current);
        }
        setCount(Math.floor(start));
      }, 10);
    };
    // Intersection Observer to trigger animation when in view
    observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        } else {
          clearInterval(timerRef.current); // Clear interval when out of view
          setCount(0); // Optional: Reset when out of view
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    // Clean up observer on unmount
    return () => {
      if (observer && node) observer.unobserve(node); // Clean up observer
      clearInterval(timerRef.current);
    };
  }, [target]);
  return (
    <div ref={containerRef} className="text-center p-4">
      <div className="text-4xl font-bold text-true-blue">{count}+</div>
      <p className="text-gray-700 mt-2">{label}</p>
    </div>
  );
};

const Statistics = () => {
  return (
    <main className="bg-white">
      <section className="bg-yellow py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Counter target={500} label="Participants Reached" />
          <Counter target={30} label="Workshops Held" />
          <Counter target={15} label="Partners & Sponsors" />
          <Counter target={20} label="Countries Connected" />
        </div>
      </section>

      <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="text-center">
            <h4 class="text-xl font-medium text-gray-900">
              Numbers tell the hard works we’ve done in last 6 years
            </h4>
          </div>

          <div class="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div class="px-4 py-6">
                <div class="flex items-start">
                  <svg
                    class="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <div class="ml-4">
                    <h4 class="text-4xl font-bold text-gray-900">6+</h4>
                    <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Years in business
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div class="px-4 py-6">
                <div class="flex items-start">
                  <svg
                    class="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <div class="ml-4">
                    <h4 class="text-4xl font-bold text-gray-900">37+</h4>
                    <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Team members
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div class="px-4 py-6">
                <div class="flex items-start">
                  <svg
                    class="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div class="ml-4">
                    <h4 class="text-4xl font-bold text-gray-900">3,274</h4>
                    <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Projects delivered
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div class="px-4 py-6">
                <div class="flex items-start">
                  <svg
                    class="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <div class="ml-4">
                    <h4 class="text-4xl font-bold text-gray-900">98%</h4>
                    <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Customer success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Statistics;
