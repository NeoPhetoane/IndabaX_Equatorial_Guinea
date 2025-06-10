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
    <section className="bg-yellow py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Impact</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <Counter target={500} label="Participants Reached" />
        <Counter target={30} label="Workshops Held" />
        <Counter target={15} label="Partners & Sponsors" />
        <Counter target={20} label="Countries Connected" />
      </div>
    </section>
  );
};

export default Statistics;
