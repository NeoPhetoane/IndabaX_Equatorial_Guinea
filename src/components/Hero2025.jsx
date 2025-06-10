import CountdownTimer from "./CountdownTimer";
import { useInView } from "react-intersection-observer";

export default function Hero2025() {
  const { ref, inView } = useInView({
    threshold: 0.3, // triggers when 10% is in view
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className={`relative bg-cover bg-center text-true-blue text-center 
        py-65 px-4 sm:px-8 md:px-20 transition-all duration-1000 ease-out transform 
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        bg-green-500`}
      style={{ backgroundImage: "url('/bgwhite.png')" }}
    >
      <div className="text-center px-6">
        <h2 className="text-4xl font-bold">
          IndabaX Equatorial Guinea 2025 Has Arrived
        </h2>
        <p>
          Join us on an epic three day spree of never ending talk, exibitions
          and creations
        </p>
        <p className="mt-4 text-lg">July 15 – 17 · Malabo</p>
        <br></br>
        <CountdownTimer targetDate="2025-07-01T00:00:00" />
      </div>
    </section>
  );
}
