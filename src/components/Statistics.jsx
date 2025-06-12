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

    if (node) {
      observer.observe(node);
    }
    // Clean up observer on unmount
    return () => {
      if (observer && node) observer.unobserve(node); // Clean up observer
      clearInterval(timerRef.current);
    };
  }, [target]);

  return (
    <div ref={containerRef} className="text-center px-4">
      <div className="text-5xl font-semibold text-white tracking-tight">
        <span className="text-white">{count}+</span>
      </div>
      <p className="text-sm text-white mt-2 font-medium">{label}</p>
    </div>
  );
};

const Statistics = () => {
  return (
    <main>
      <section className="bg-true-blue">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Our Impact
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white">
            Since our inception, IndabaX Equatorial Guinea has made significant
            strides in promoting AI education and collaboration across the
            continent.<br></br> Here are some of our key achievements:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 p-4">
            <Counter target={500} label="Participants Reached" />
            <Counter target={30} label="Workshops Held" />
            <Counter target={15} label="Partners & Sponsors" />
            <Counter target={20} label="Countries Connected" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Statistics;
